import { body, param, query, validationResult } from 'express-validator';
import { AppError } from '../utils/AppError.js';

// Run validation and respond with errors
export const validate = (validations) => async (req, res, next) => {
  await Promise.all(validations.map((v) => v.run(req)));
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return next(new AppError('Validation failed.', 422, errors.array()));
};

// Auth validations
export const registerValidation = [
  body('name').trim().notEmpty().isLength({ min: 2, max: 100 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
];

export const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
];

export const forgotPasswordValidation = [
  body('email').isEmail().normalizeEmail(),
];

export const resetPasswordValidation = [
  body('token').notEmpty().withMessage('Token is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];

// Paper validations
export const textUploadValidation = [
  body('title').trim().notEmpty().isLength({ max: 500 }),
  body('text').notEmpty().isLength({ min: 100, max: 500000 }),
  body('projectId').isUUID(),
];

export const paperIdValidation = [
  param('id').isUUID(),
];

export const paperListValidation = [
  query('page').optional().isInt({ min: 1 }).toInt(),
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt(),
  query('search').optional().trim().isLength({ max: 200 }),
  query('sort').optional().isIn(['asc', 'desc']),
  query('projectId').optional().isUUID(),
];

// Summary validations
export const generateSummaryValidation = [
  body('paperId').isUUID(),
];

// Project validations
export const createProjectValidation = [
  body('name').trim().notEmpty().isLength({ min: 2, max: 200 }),
  body('description').optional().trim().isLength({ max: 1000 }),
];

export const projectIdValidation = [
  param('id').isUUID(),
];

// Comparison validations
export const triggerComparisonValidation = [
  body('projectId').isUUID(),
];

// Gap analysis validations
export const triggerGapValidation = [
  body('projectId').isUUID(),
];

// Paper generation validations
export const generatePaperValidation = [
  body('projectId').isUUID(),
  body('title').optional().trim().isLength({ max: 500 }),
  body('format').optional().isIn(['IEEE', 'SPRINGER', 'ELSEVIER', 'APA']),
  body('objectives').optional().trim().isLength({ max: 2000 }),
];
