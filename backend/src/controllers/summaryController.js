import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../config/prisma.js';
import { summarizePaper } from '../services/AI/Summarizer.js';
import { AppError } from '../utils/AppError.js';
import { logger } from '../utils/logger.js';
import PDFDocument from 'pdfkit';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

// ============================================================
// GENERATE SUMMARY
// ============================================================
export const generate = async (req, res, next) => {
  try {
    const { paperId } = req.body;

    const paper = await prisma.paper.findFirst({
      where: { id: paperId, userId: req.user.id },
      include: { content: true, metadata: true, summary: true },
    });

    if (!paper) throw new AppError('Paper not found.', 404);
    if (paper.summary) throw new AppError('Summary already exists. Use regenerate instead.', 409);
    if (!paper.content?.rawText) throw new AppError('Paper has no content yet. Please wait for processing.', 400);
    if (paper.status === 'PROCESSING') throw new AppError('Paper is still being processed.', 400);

    await prisma.paper.update({ where: { id: paperId }, data: { status: 'SUMMARIZING' } });

    const summaryData = await summarizePaper(
      paper.title,
      paper.content.rawText,
      {
        authors: paper.metadata?.authors || [],
        journal: paper.metadata?.journal,
        year: paper.metadata?.year,
        keywords: paper.metadata?.keywords || [],
      }
    );

    const summary = await prisma.summary.create({
      data: {
        paperId,
        userId: req.user.id,
        ...summaryData,
        year: paper.metadata?.year || null,
        authors: paper.metadata?.authors || [],
        journal: paper.metadata?.journal || null,
        keywords: summaryData.keywords?.length
          ? summaryData.keywords
          : (paper.metadata?.keywords || []),
      },
    });

    await prisma.paper.update({ where: { id: paperId }, data: { status: 'SUMMARIZED' } });

    await prisma.activityLog.create({
      data: {
        userId: req.user.id,
        action: 'SUMMARY_GENERATED',
        entity: 'Paper',
        entityId: paperId,
        metadata: { title: paper.title },
      },
    });

    res.status(201).json({ success: true, message: 'Summary generated.', data: summary });
  } catch (err) {
    try {
      if (req.body.paperId) {
        await prisma.paper.update({ where: { id: req.body.paperId }, data: { status: 'READY' } });
      }
    } catch (dbErr) {
      logger.error('Failed to reset paper status to READY:', dbErr);
    }
    next(err);
  }
};

// ============================================================
// REGENERATE SUMMARY
// ============================================================
export const regenerate = async (req, res, next) => {
  try {
    const { paperId } = req.body;

    const paper = await prisma.paper.findFirst({
      where: { id: paperId, userId: req.user.id },
      include: { content: true, metadata: true, summary: true },
    });

    if (!paper) throw new AppError('Paper not found.', 404);
    if (!paper.content?.rawText) throw new AppError('Paper has no content.', 400);

    const summaryData = await summarizePaper(paper.title, paper.content.rawText, {
      authors: paper.metadata?.authors || [],
      journal: paper.metadata?.journal,
      year: paper.metadata?.year,
    });

    let summary;
    if (paper.summary) {
      summary = await prisma.summary.update({
        where: { id: paper.summary.id },
        data: { ...summaryData, updatedAt: new Date() },
      });
    } else {
      summary = await prisma.summary.create({
        data: {
          paperId,
          userId: req.user.id,
          ...summaryData,
          year: paper.metadata?.year || null,
          authors: paper.metadata?.authors || [],
          journal: paper.metadata?.journal || null,
        },
      });
    }

    await prisma.paper.update({ where: { id: paperId }, data: { status: 'SUMMARIZED' } });

    res.json({ success: true, message: 'Summary regenerated.', data: summary });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// LIST SUMMARIES
// ============================================================
export const listSummaries = async (req, res, next) => {
  try {
    const { projectId } = req.query;

    const where = {
      userId: req.user.id,
      ...(projectId && { paper: { projectId } }),
    };

    const summaries = await prisma.summary.findMany({
      where,
      include: {
        paper: { select: { id: true, title: true, uploadType: true, projectId: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ success: true, data: summaries });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// GET SINGLE SUMMARY
// ============================================================
export const getSummary = async (req, res, next) => {
  try {
    const summary = await prisma.summary.findFirst({
      where: { id: req.params.id, userId: req.user.id },
      include: {
        paper: {
          select: {
            id: true, title: true, uploadType: true, createdAt: true,
            metadata: true,
            project: { select: { id: true, name: true } },
          },
        },
      },
    });

    if (!summary) throw new AppError('Summary not found.', 404);
    res.json({ success: true, data: summary });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// SHARE SUMMARY
// ============================================================
export const share = async (req, res, next) => {
  try {
    const summary = await prisma.summary.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!summary) throw new AppError('Summary not found.', 404);

    const shareToken = uuidv4();
    const shareExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await prisma.summary.update({
      where: { id: summary.id },
      data: { shareToken, shareExpiresAt, isShared: true },
    });

    res.json({ success: true, data: { shareToken, expiresAt: shareExpiresAt } });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// GET SHARED SUMMARY (Public)
// ============================================================
export const getSharedSummary = async (req, res, next) => {
  try {
    const summary = await prisma.summary.findFirst({
      where: {
        shareToken: req.params.token,
        isShared: true,
        shareExpiresAt: { gt: new Date() },
      },
      include: {
        paper: { select: { id: true, title: true, createdAt: true } },
      },
    });

    if (!summary) throw new AppError('Share link is invalid or has expired.', 404);
    res.json({ success: true, data: summary });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// DELETE SUMMARY
// ============================================================
export const removeSummary = async (req, res, next) => {
  try {
    const summary = await prisma.summary.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!summary) throw new AppError('Summary not found.', 404);

    await prisma.summary.delete({ where: { id: summary.id } });
    await prisma.paper.update({
      where: { id: summary.paperId },
      data: { status: 'READY' },
    });

    res.json({ success: true, message: 'Summary deleted.' });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// EXPORT PDF
// ============================================================
export const exportPdfController = async (req, res, next) => {
  try {
    const summary = await prisma.summary.findFirst({
      where: { id: req.params.id, userId: req.user.id },
      include: { paper: { select: { title: true } } },
    });

    if (!summary) throw new AppError('Summary not found.', 404);

    const doc = new PDFDocument({ margins: { top: 50, left: 72, right: 72, bottom: 50 } });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="summary-${summary.id}.pdf"`);
    doc.pipe(res);

    doc.fontSize(18).font('Helvetica-Bold').text(summary.paper?.title || 'Research Summary', { align: 'center' });
    doc.moveDown();
    doc.fontSize(10).font('Helvetica-Oblique').text(`Generated on ${new Date().toLocaleDateString()}`, { align: 'center' });
    doc.moveDown(2);

    const sections = [
      { title: 'Abstract Summary', content: summary.abstractSummary },
      { title: 'Research Problem', content: summary.researchProblem },
      { title: 'Objectives', content: summary.objectives },
      { title: 'Methodology', content: summary.methodology },
      { title: 'Dataset', content: summary.dataset },
      { title: 'Algorithms', content: summary.algorithms },
      { title: 'Results', content: summary.results },
      { title: 'Advantages', content: summary.advantages },
      { title: 'Limitations', content: summary.limitations },
      { title: 'Future Work', content: summary.futureWork },
      { title: 'Novel Contributions', content: summary.novelContributions },
      { title: 'Conclusion', content: summary.conclusion },
    ];

    sections.forEach(({ title, content }) => {
      if (content) {
        doc.fontSize(13).font('Helvetica-Bold').text(title);
        doc.moveDown(0.5);
        doc.fontSize(11).font('Helvetica').text(content, { align: 'justify' });
        doc.moveDown(1.5);
      }
    });

    if (Array.isArray(summary.keywords) && summary.keywords.length > 0) {
      doc.fontSize(13).font('Helvetica-Bold').text('Keywords');
      doc.moveDown(0.5);
      doc.fontSize(11).font('Helvetica').text(summary.keywords.join(', '));
    }

    doc.end();
  } catch (err) {
    next(err);
  }
};

// ============================================================
// EXPORT DOCX
// ============================================================
export const exportDocxController = async (req, res, next) => {
  try {
    const summary = await prisma.summary.findFirst({
      where: { id: req.params.id, userId: req.user.id },
      include: { paper: { select: { title: true } } },
    });

    if (!summary) throw new AppError('Summary not found.', 404);

    const sections = [
      { title: 'Abstract Summary', content: summary.abstractSummary },
      { title: 'Research Problem', content: summary.researchProblem },
      { title: 'Objectives', content: summary.objectives },
      { title: 'Methodology', content: summary.methodology },
      { title: 'Dataset', content: summary.dataset },
      { title: 'Algorithms', content: summary.algorithms },
      { title: 'Results', content: summary.results },
      { title: 'Advantages', content: summary.advantages },
      { title: 'Limitations', content: summary.limitations },
      { title: 'Future Work', content: summary.futureWork },
      { title: 'Novel Contributions', content: summary.novelContributions },
      { title: 'Conclusion', content: summary.conclusion },
    ];

    const children = [
      new Paragraph({
        text: summary.paper?.title || 'Research Summary',
        heading: HeadingLevel.TITLE,
      }),
    ];

    sections.forEach(({ title, content }) => {
      if (content) {
        children.push(new Paragraph({ text: title, heading: HeadingLevel.HEADING_1 }));
        children.push(new Paragraph({ children: [new TextRun({ text: content, size: 22 })] }));
        children.push(new Paragraph({ text: '' }));
      }
    });

    const doc = new Document({ sections: [{ children }] });
    const buffer = await Packer.toBuffer(doc);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="summary-${summary.id}.docx"`);
    res.send(buffer);
  } catch (err) {
    next(err);
  }
};
