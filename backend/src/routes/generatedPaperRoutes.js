import { Router } from 'express';
import {
  triggerGeneration,
  getGeneratedPaper,
  getProjectPapers,
  deleteGeneratedPaper,
  exportPdfPaper,
  exportDocxPaper,
  exportMarkdownPaper,
  exportHtmlPaper,
} from '../controllers/generatedPaperController.js';
import { authMiddleware } from '../middleware/auth.js';
import { validate, generatePaperValidation } from '../middleware/validation.js';

const router = Router();

router.use(authMiddleware);

router.post('/generate', validate(generatePaperValidation), triggerGeneration);
router.get('/:id', getGeneratedPaper);
router.get('/project/:projectId', getProjectPapers);
router.delete('/:id', deleteGeneratedPaper);

// Exports
router.get('/:id/export/pdf', exportPdfPaper);
router.get('/:id/export/docx', exportDocxPaper);
router.get('/:id/export/markdown', exportMarkdownPaper);
router.get('/:id/export/html', exportHtmlPaper);

export default router;
