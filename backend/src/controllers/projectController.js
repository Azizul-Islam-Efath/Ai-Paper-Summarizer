import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/AppError.js';
import { logger } from '../utils/logger.js';

// ============================================================
// CREATE PROJECT
// ============================================================
export const createProject = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const project = await prisma.project.create({
      data: { name, description, userId: req.user.id },
    });

    await prisma.activityLog.create({
      data: {
        userId: req.user.id,
        action: 'PROJECT_CREATED',
        entity: 'Project',
        entityId: project.id,
        metadata: { name },
      },
    });

    res.status(201).json({ success: true, message: 'Project created.', data: project });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// LIST PROJECTS
// ============================================================
export const listProjects = async (req, res, next) => {
  try {
    const { search } = req.query;

    const projects = await prisma.project.findMany({
      where: {
        userId: req.user.id,
        ...(search && { name: { contains: search, mode: 'insensitive' } }),
      },
      include: {
        _count: {
          select: {
            papers: true,
            generatedPapers: true,
            comparisons: true,
            researchGaps: true,
          },
        },
        papers: {
          take: 3,
          orderBy: { createdAt: 'desc' },
          select: { id: true, title: true, status: true, createdAt: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// GET PROJECT
// ============================================================
export const getProject = async (req, res, next) => {
  try {
    const project = await prisma.project.findFirst({
      where: { id: req.params.id, userId: req.user.id },
      include: {
        papers: {
          include: {
            metadata: { select: { authors: true, year: true, keywords: true } },
            summary: { select: { id: true, abstractSummary: true } },
          },
          orderBy: { createdAt: 'desc' },
        },
        generatedPapers: {
          select: { id: true, title: true, status: true, format: true, createdAt: true },
          orderBy: { createdAt: 'desc' },
        },
        comparisons: {
          select: { id: true, status: true, createdAt: true },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        researchGaps: {
          select: { id: true, status: true, createdAt: true },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!project) throw new AppError('Project not found.', 404);
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// UPDATE PROJECT
// ============================================================
export const updateProject = async (req, res, next) => {
  try {
    const { name, description, status } = req.body;

    const project = await prisma.project.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    const updated = await prisma.project.update({
      where: { id: project.id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(status && { status }),
      },
    });

    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// DELETE PROJECT
// ============================================================
export const deleteProject = async (req, res, next) => {
  try {
    const project = await prisma.project.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    await prisma.project.delete({ where: { id: project.id } });
    res.json({ success: true, message: 'Project deleted.' });
  } catch (err) {
    next(err);
  }
};

// ============================================================
// GET PROJECT STATS
// ============================================================
export const getProjectStats = async (req, res, next) => {
  try {
    const project = await prisma.project.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!project) throw new AppError('Project not found.', 404);

    const [paperCount, summarizedCount, generatedCount, comparisonCount, gapCount] = await Promise.all([
      prisma.paper.count({ where: { projectId: project.id } }),
      prisma.paper.count({ where: { projectId: project.id, status: 'SUMMARIZED' } }),
      prisma.generatedPaper.count({ where: { projectId: project.id } }),
      prisma.comparison.count({ where: { projectId: project.id } }),
      prisma.researchGap.count({ where: { projectId: project.id } }),
    ]);

    res.json({
      success: true,
      data: {
        paperCount,
        summarizedCount,
        pendingCount: paperCount - summarizedCount,
        generatedCount,
        comparisonCount,
        gapCount,
        readyForComparison: summarizedCount >= 2,
        readyToGenerate: summarizedCount >= 1,
      },
    });
  } catch (err) {
    next(err);
  }
};
