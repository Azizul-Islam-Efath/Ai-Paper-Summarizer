import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/AppError.js';

export const getStats = async (req, res, next) => {
  try {
    const [userCount, paperCount, summaryCount, projectCount, generatedCount] = await Promise.all([
      prisma.user.count(),
      prisma.paper.count(),
      prisma.summary.count(),
      prisma.project.count(),
      prisma.generatedPaper.count(),
    ]);

    res.json({
      success: true,
      data: { userCount, paperCount, summaryCount, projectCount, generatedCount },
    });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        select: {
          id: true, name: true, email: true, role: true, createdAt: true,
          _count: { select: { papers: true, projects: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count(),
    ]);

    res.json({
      success: true,
      data: {
        users,
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
