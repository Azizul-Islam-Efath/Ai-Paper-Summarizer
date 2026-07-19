import { prisma } from '../config/prisma.js';
import { generatePaper } from '../services/AI/PaperGenerator.js';
import { AppError } from '../utils/AppError.js';
import { logger } from '../utils/logger.js';
import PDFDocument from 'pdfkit';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { marked } from 'marked';

// ============================================================
// TRIGGER ACADEMIC PAPER SYNTHESIS
// ============================================================
export const triggerGeneration = async (req, res, next) => {
  try {
    const { projectId, title, format = 'IEEE', objectives } = req.body;

    const project = await prisma.project.findFirst({
      where: { id: projectId, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    // Get all summarized papers in project
    const papers = await prisma.paper.findMany({
      where: { projectId, status: 'SUMMARIZED' },
      include: { summary: true, metadata: true },
    });

    if (papers.length < 1) {
      throw new AppError('At least 1 summarized paper is required to synthesize a new paper.', 400);
    }

    const generatedPaper = await prisma.generatedPaper.create({
      data: {
        projectId,
        userId: req.user.id,
        title: title || `Synthesized Paper - ${project.name}`,
        format,
        status: 'PROCESSING',
      },
    });

    res.status(202).json({
      success: true,
      message: 'Synthesis pipeline triggered. Creating academic draft.',
      data: { id: generatedPaper.id, status: 'PROCESSING' },
    });

    runSynthesis({
      generatedId: generatedPaper.id,
      projectTitle: project.name,
      papers,
      userObjectives: objectives,
      format,
    }).catch(err => {
      logger.error(`Synthesis failed for ${generatedPaper.id}:`, err);
    });
  } catch (err) {
    next(err);
  }
};

const runSynthesis = async ({
  generatedId,
  projectTitle,
  papers,
  userObjectives,
  format,
}) => {
  try {
    const papersData = papers.map(p => ({
      title: p.title,
      authors: p.metadata?.authors || [],
      year: p.metadata?.year,
      journal: p.metadata?.journal || p.metadata?.conference,
      abstractSummary: p.summary?.abstractSummary,
      methodology: p.summary?.methodology,
      dataset: p.summary?.dataset,
      algorithms: p.summary?.algorithms,
      results: p.summary?.results,
      limitations: p.summary?.limitations,
    }));

    const result = await generatePaper({
      projectTitle,
      papersData,
      userObjectives,
      format,
    });

    await prisma.generatedPaper.update({
      where: { id: generatedId },
      data: {
        status: 'COMPLETED',
        title: result.title,
        abstractText: result.abstractText,
        keywords: result.keywords,
        introduction: result.introduction,
        relatedWork: result.relatedWork,
        literatureReview: result.literatureReview,
        researchGap: result.researchGap,
        objectives: result.objectives,
        methodology: result.methodology,
        systemDesign: result.systemDesign,
        experimentalSetup: result.experimentalSetup,
        results: result.results,
        discussion: result.discussion,
        limitations: result.limitations,
        futureWork: result.futureWork,
        conclusion: result.conclusion,
        references: result.references,
        fullContent: result.fullContent,
      },
    });

    logger.info(`Paper generation ${generatedId} completed.`);
  } catch (err) {
    await prisma.generatedPaper.update({
      where: { id: generatedId },
      data: { status: 'FAILED' },
    });
    throw err;
  }
};

// ============================================================
// CRUD OPERATIONS
// ============================================================
export const getGeneratedPaper = async (req, res, next) => {
  try {
    const paper = await prisma.generatedPaper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
      include: { project: { select: { id: true, name: true } } },
    });
    if (!paper) throw new AppError('Generated paper not found.', 404);
    res.json({ success: true, data: paper });
  } catch (err) {
    next(err);
  }
};

export const getProjectPapers = async (req, res, next) => {
  try {
    const papers = await prisma.generatedPaper.findMany({
      where: { projectId: req.params.projectId, userId: req.user.id },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: papers });
  } catch (err) {
    next(err);
  }
};

export const deleteGeneratedPaper = async (req, res, next) => {
  try {
    const paper = await prisma.generatedPaper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!paper) throw new AppError('Generated paper not found.', 404);

    await prisma.generatedPaper.delete({ where: { id: paper.id } });
    res.json({ success: true, message: 'Generated paper deleted.' });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// EXPORTS
// ============================================================
export const exportPdfPaper = async (req, res, next) => {
  try {
    const paper = await prisma.generatedPaper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!paper) throw new AppError('Paper not found.', 404);

    const doc = new PDFDocument({ margins: { top: 50, left: 72, right: 72, bottom: 50 } });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="paper-${paper.id}.pdf"`);
    doc.pipe(res);

    // Title
    doc.fontSize(18).font('Helvetica-Bold').text(paper.title, { align: 'center' });
    doc.moveDown();
    doc.fontSize(10).font('Helvetica-Oblique').text(`Synthesized AI Research Draft - Format: ${paper.format}`, { align: 'center' });
    doc.moveDown(2);

    const addSection = (title, content) => {
      if (content) {
        doc.fontSize(12).font('Helvetica-Bold').text(title);
        doc.moveDown(0.5);
        doc.fontSize(10).font('Helvetica').text(content, { align: 'justify', lineGap: 2 });
        doc.moveDown(1.5);
      }
    };

    addSection('Abstract', paper.abstractText);
    addSection('1. Introduction', paper.introduction);
    addSection('2. Related Work', paper.relatedWork);
    addSection('3. Literature Review', paper.literatureReview);
    addSection('4. Research Gap', paper.researchGap);
    addSection('5. Objectives', paper.objectives);
    addSection('6. Methodology', paper.methodology);
    addSection('7. System Design', paper.systemDesign);
    addSection('8. Experimental Setup', paper.experimentalSetup);
    addSection('9. Results', paper.results);
    addSection('10. Discussion', paper.discussion);
    addSection('11. Limitations', paper.limitations);
    addSection('12. Future Work', paper.futureWork);
    addSection('13. Conclusion', paper.conclusion);

    if (Array.isArray(paper.references) && paper.references.length > 0) {
      doc.fontSize(12).font('Helvetica-Bold').text('References');
      doc.moveDown(0.5);
      paper.references.forEach((r, idx) => {
        doc.fontSize(9).font('Helvetica').text(`[${idx + 1}] ${r.citation || r.authors + ' "' + r.title + '" (' + r.year + ')'}`);
        doc.moveDown(0.3);
      });
    }

    doc.end();
  } catch (err) {
    next(err);
  }
};

export const exportDocxPaper = async (req, res, next) => {
  try {
    const paper = await prisma.generatedPaper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!paper) throw new AppError('Paper not found.', 404);

    const docChildren = [
      new Paragraph({ text: paper.title, heading: HeadingLevel.TITLE }),
      new Paragraph({ text: `Academic Format: ${paper.format}`, heading: HeadingLevel.SUBTITLE }),
      new Paragraph({ text: '' }),
    ];

    const addSection = (title, content) => {
      if (content) {
        docChildren.push(new Paragraph({ text: title, heading: HeadingLevel.HEADING_1 }));
        docChildren.push(new Paragraph({ children: [new TextRun({ text: content, size: 22 })] }));
        docChildren.push(new Paragraph({ text: '' }));
      }
    };

    addSection('Abstract', paper.abstractText);
    addSection('1. Introduction', paper.introduction);
    addSection('2. Related Work', paper.relatedWork);
    addSection('3. Literature Review', paper.literatureReview);
    addSection('4. Research Gap', paper.researchGap);
    addSection('5. Objectives', paper.objectives);
    addSection('6. Methodology', paper.methodology);
    addSection('7. System Design', paper.systemDesign);
    addSection('8. Experimental Setup', paper.experimentalSetup);
    addSection('9. Results', paper.results);
    addSection('10. Discussion', paper.discussion);
    addSection('11. Limitations', paper.limitations);
    addSection('12. Future Work', paper.futureWork);
    addSection('13. Conclusion', paper.conclusion);

    if (Array.isArray(paper.references) && paper.references.length > 0) {
      docChildren.push(new Paragraph({ text: 'References', heading: HeadingLevel.HEADING_1 }));
      paper.references.forEach((r, idx) => {
        docChildren.push(new Paragraph({
          children: [
            new TextRun({
              text: `[${idx + 1}] ${r.citation || r.authors + ' "' + r.title + '" (' + r.year + ')'}`,
              size: 20,
            }),
          ],
        }));
      });
    }

    const doc = new Document({ sections: [{ children: docChildren }] });
    const buffer = await Packer.toBuffer(doc);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="paper-${paper.id}.docx"`);
    res.send(buffer);
  } catch (err) {
    next(err);
  }
};

export const exportMarkdownPaper = async (req, res, next) => {
  try {
    const paper = await prisma.generatedPaper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!paper) throw new AppError('Paper not found.', 404);

    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename="paper-${paper.id}.md"`);
    res.send(paper.fullContent);
  } catch (err) {
    next(err);
  }
};

export const exportHtmlPaper = async (req, res, next) => {
  try {
    const paper = await prisma.generatedPaper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!paper) throw new AppError('Paper not found.', 404);

    const htmlContent = marked(paper.fullContent);

    const styledHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${paper.title}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { text-align: center; font-size: 2.2em; margin-bottom: 5px; }
    h2 { border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 30px; color: #111; }
    p { text-align: justify; }
    .meta { text-align: center; color: #666; font-style: italic; margin-bottom: 40px; }
  </style>
</head>
<body>
  <div class="meta">Academic Format: ${paper.format} | Generated by AI Research Workspace</div>
  ${htmlContent}
</body>
</html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `attachment; filename="paper-${paper.id}.html"`);
    res.send(styledHtml);
  } catch (err) {
    next(err);
  }
};
