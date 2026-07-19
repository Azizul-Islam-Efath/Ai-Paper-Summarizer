import { Router } from 'express';
import {
  register,
  login,
  refresh,
  logout,
  me,
  forgotPasswordController,
  resetPasswordController,
} from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';
import { validate, registerValidation, loginValidation, forgotPasswordValidation, resetPasswordValidation } from '../middleware/validation.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/register', authLimiter, validate(registerValidation), register);
router.post('/login', authLimiter, validate(loginValidation), login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/me', authMiddleware, me);
router.post('/forgot-password', authLimiter, validate(forgotPasswordValidation), forgotPasswordController);
router.post('/reset-password', authLimiter, validate(resetPasswordValidation), resetPasswordController);

export default router;
