import { Router } from 'express';
import {
  generate,
  regenerate,
  listSummaries,
  getSummary,
  getSharedSummary,
  share,
  removeSummary,
  exportPdfController,
  exportDocxController,
} from '../controllers/summaryController.js';
import { authMiddleware } from '../middleware/auth.js';
import { validate, generateSummaryValidation } from '../middleware/validation.js';
import { aiLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.get('/share/:token', getSharedSummary);

router.use(authMiddleware);

router.post('/generate', aiLimiter, validate(generateSummaryValidation), generate);
router.post('/regenerate', aiLimiter, validate(generateSummaryValidation), regenerate);
router.get('/', listSummaries);
router.get('/:id', getSummary);
router.post('/:id/share', share);
router.delete('/:id', removeSummary);
router.get('/:id/export/pdf', exportPdfController);
router.get('/:id/export/docx', exportDocxController);

export default router;
