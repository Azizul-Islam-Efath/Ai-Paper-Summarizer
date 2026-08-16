import { Router } from 'express';
import {
  uploadPdf,
  uploadMultiplePdfs,
  uploadText,
  listPapers,
  getPaper,
  removePaper,
  favoritePaper,
} from '../controllers/paperController.js';
import { authMiddleware } from '../middleware/auth.js';
import { uploadMiddleware, uploadMultipleMiddleware } from '../middleware/upload.js';
import { validate, textUploadValidation, paperIdValidation, paperListValidation } from '../middleware/validation.js';

const router = Router();

router.use(authMiddleware);

router.post('/upload', uploadMultipleMiddleware.array('files', 20), uploadMultiplePdfs);
router.post('/text', validate(textUploadValidation), uploadText);
router.get('/', validate(paperListValidation), listPapers);
router.get('/:id', validate(paperIdValidation), getPaper);
router.delete('/:id', validate(paperIdValidation), removePaper);
router.patch('/:id/favorite', validate(paperIdValidation), favoritePaper);

export default router;
