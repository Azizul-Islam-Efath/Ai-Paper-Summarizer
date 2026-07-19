import { logger } from '../utils/logger.js';
import { AppError } from '../utils/AppError.js';

// Global error handler
export const errorHandler = (err, req, res, next) => {
  let error = err;

  // Prisma errors
  if (err.code === 'P2002') {
    const field = err.meta?.target?.[0] || 'field';
    error = new AppError(`${field} already exists.`, 409);
  } else if (err.code === 'P2025') {
    error = new AppError('Record not found.', 404);
  } else if (err.code === 'P2003') {
    error = new AppError('Related record not found.', 400);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    error = new AppError('Invalid token.', 401);
  } else if (err.name === 'TokenExpiredError') {
    error = new AppError('Token expired.', 401);
  }

  // Multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    error = new AppError('File too large.', 413);
  } else if (err.code === 'LIMIT_FILE_COUNT') {
    error = new AppError('Too many files. Maximum 20 files allowed.', 400);
  } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    error = new AppError('Unexpected file field.', 400);
  }

  const statusCode = error.statusCode || 500;
  const message = error.isOperational ? error.message : 'Internal server error';

  if (!error.isOperational) {
    logger.error('Unhandled error:', err);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors: error.errors || null,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found.`,
  });
};
