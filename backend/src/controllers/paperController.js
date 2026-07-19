import { prisma } from '../config/prisma.js';
import { storageService } from '../services/storageService.js';
import { extractTextFromPdf, extractTextFromString } from '../services/pdfParserService.js';
import { extractMetadata } from '../services/AI/MetadataExtractor.js';
import { AppError } from '../utils/AppError.js';
import { logger } from '../utils/logger.js';
import path from 'path';

// ============================================================
// UPLOAD SINGLE PDF
// ============================================================
export const uploadPdf = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) throw new AppError('No file uploaded.', 400);

    const { projectId } = req.body;
    if (!projectId) throw new AppError('projectId is required.', 400);

    // Verify project belongs to user
    const project = await prisma.project.findFirst({
      where: { id: projectId, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    // Create paper record
    const paper = await prisma.paper.create({
      data: {
        title: path.basename(file.originalname, '.pdf'),
        uploadType: 'PDF',
        filePath: file.path,
        fileName: file.originalname,
        fileSize: file.size,
        status: 'PROCESSING',
        userId: req.user.id,
        projectId,
      },
    });

    // Process asynchronously
    processPaper(paper.id, file.path, paper.title).catch((err) => {
      logger.error(`Background processing failed for paper ${paper.id}:`, err);
    });

    res.status(201).json({
      success: true,
      message: 'Paper uploaded successfully. Processing in background.',
      data: paper,
    });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// UPLOAD MULTIPLE PDFs (1-20)
// ============================================================
export const uploadMultiplePdfs = async (req, res, next) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) throw new AppError('No files uploaded.', 400);

    const { projectId } = req.body;
    if (!projectId) throw new AppError('projectId is required.', 400);

    const project = await prisma.project.findFirst({
      where: { id: projectId, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    const papers = [];

    for (const file of files) {
      const paper = await prisma.paper.create({
        data: {
          title: path.basename(file.originalname, '.pdf'),
          uploadType: 'PDF',
          filePath: file.path,
          fileName: file.originalname,
          fileSize: file.size,
          status: 'PROCESSING',
          userId: req.user.id,
          projectId,
        },
      });
      papers.push(paper);

      // Process each paper asynchronously
      processPaper(paper.id, file.path, paper.title).catch((err) => {
        logger.error(`Background processing failed for paper ${paper.id}:`, err);
      });
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: req.user.id,
        action: 'PAPERS_UPLOADED',
        entity: 'Project',
        entityId: projectId,
        metadata: { count: papers.length, projectName: project.name },
      },
    });

    res.status(201).json({
      success: true,
      message: `${papers.length} paper(s) uploaded. Processing in background.`,
      data: papers,
    });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// UPLOAD TEXT
// ============================================================
export const uploadText = async (req, res, next) => {
  try {
    const { title, text, projectId } = req.body;

    const project = await prisma.project.findFirst({
      where: { id: projectId, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    const paper = await prisma.paper.create({
      data: {
        title,
        uploadType: 'TEXT',
        status: 'PROCESSING',
        userId: req.user.id,
        projectId,
      },
    });

    // Process text synchronously (fast)
    processTextPaper(paper.id, text, title).catch((err) => {
      logger.error(`Text processing failed for paper ${paper.id}:`, err);
    });

    res.status(201).json({
      success: true,
      message: 'Paper uploaded successfully.',
      data: paper,
    });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// BACKGROUND PROCESSING: PDF
// ============================================================
const processPaper = async (paperId, filePath, title) => {
  try {
    // 1. Extract text
    logger.info(`Processing paper ${paperId}...`);
    const { rawText, wordCount, charCount, language } = await extractTextFromPdf(filePath);

    // 2. Save content
    await prisma.paperContent.create({
      data: { paperId, rawText, wordCount, charCount, language },
    });

    // 3. Extract metadata via AI
    const metadata = await extractMetadata(rawText, title);

    // 4. Save metadata
    await prisma.paperMetadata.create({
      data: {
        paperId,
        authors: metadata.authors,
        journal: metadata.journal,
        conference: metadata.conference,
        year: metadata.year,
        doi: metadata.doi,
        keywords: metadata.keywords,
        abstract: metadata.abstract,
        volume: metadata.volume,
        issue: metadata.issue,
        pages: metadata.pages,
        publisher: metadata.publisher,
      },
    });

    // 5. Update paper title from metadata if available
    const updates = { status: 'READY' };
    if (metadata.title && metadata.title !== 'Untitled Paper') {
      updates.title = metadata.title;
    }

    await prisma.paper.update({ where: { id: paperId }, data: updates });

    logger.info(`Paper ${paperId} processed successfully.`);
  } catch (err) {
    logger.error(`Paper ${paperId} processing error:`, err);
    await prisma.paper.update({
      where: { id: paperId },
      data: { status: 'ERROR' },
    });
  }
};

// ============================================================
// BACKGROUND PROCESSING: TEXT
// ============================================================
const processTextPaper = async (paperId, text, title) => {
  try {
    const { rawText, wordCount, charCount, language } = extractTextFromString(text);

    await prisma.paperContent.create({
      data: { paperId, rawText, wordCount, charCount, language },
    });

    const metadata = await extractMetadata(rawText, title);
    await prisma.paperMetadata.create({
      data: {
        paperId,
        authors: metadata.authors,
        journal: metadata.journal,
        conference: metadata.conference,
        year: metadata.year,
        doi: metadata.doi,
        keywords: metadata.keywords,
        abstract: metadata.abstract,
        volume: metadata.volume,
        issue: metadata.issue,
        pages: metadata.pages,
        publisher: metadata.publisher,
      },
    });

    await prisma.paper.update({ where: { id: paperId }, data: { status: 'READY' } });
  } catch (err) {
    logger.error(`Text paper ${paperId} processing error:`, err);
    await prisma.paper.update({ where: { id: paperId }, data: { status: 'ERROR' } });
  }
};

// ============================================================
// LIST PAPERS
// ============================================================
export const listPapers = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = Math.min(req.query.limit || 10, 100);
    const skip = (page - 1) * limit;
    const { search, sort = 'desc', projectId } = req.query;

    const where = {
      userId: req.user.id,
      ...(projectId && { projectId }),
      ...(search && {
        title: { contains: search, mode: 'insensitive' },
      }),
    };

    const [papers, total] = await Promise.all([
      prisma.paper.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: sort },
        include: {
          metadata: { select: { authors: true, year: true, keywords: true, journal: true } },
          summary: { select: { id: true, abstractSummary: true, keywords: true, year: true } },
          project: { select: { id: true, name: true } },
        },
      }),
      prisma.paper.count({ where }),
    ]);

    res.json({
      success: true,
      data: {
        papers,
        pagination: {
          page, limit, total,
          totalPages: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// GET SINGLE PAPER
// ============================================================
export const getPaper = async (req, res, next) => {
  try {
    const paper = await prisma.paper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
      include: {
        metadata: true,
        content: { select: { wordCount: true, charCount: true, language: true } },
        summary: true,
        project: { select: { id: true, name: true } },
      },
    });

    if (!paper) throw new AppError('Paper not found.', 404);

    res.json({ success: true, data: paper });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// DELETE PAPER
// ============================================================
export const removePaper = async (req, res, next) => {
  try {
    const paper = await prisma.paper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!paper) throw new AppError('Paper not found.', 404);

    if (paper.filePath) {
      await storageService.deleteFile(paper.fileName);
    }

    await prisma.paper.delete({ where: { id: paper.id } });

    res.json({ success: true, message: 'Paper deleted successfully.' });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// TOGGLE FAVORITE
// ============================================================
export const favoritePaper = async (req, res, next) => {
  try {
    const paper = await prisma.paper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!paper) throw new AppError('Paper not found.', 404);

    const updated = await prisma.paper.update({
      where: { id: paper.id },
      data: { isFavorite: !paper.isFavorite },
    });

    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// RETRY PROCESSING
// ============================================================
export const retryProcessing = async (req, res, next) => {
  try {
    const paper = await prisma.paper.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!paper) throw new AppError('Paper not found.', 404);
    if (paper.status !== 'ERROR') throw new AppError('Paper is not in error state.', 400);

    await prisma.paper.update({ where: { id: paper.id }, data: { status: 'PROCESSING' } });

    if (paper.uploadType === 'PDF' && paper.filePath) {
      processPaper(paper.id, paper.filePath, paper.title).catch(err => {
        logger.error(`Retry processing failed for paper ${paper.id}:`, err);
      });
    }

    res.json({ success: true, message: 'Processing restarted.' });
  } catch (err) {
    next(err);
  }
};
