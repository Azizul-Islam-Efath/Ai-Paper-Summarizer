import { Router } from 'express';
import {
  createProject,
  listProjects,
  getProject,
  updateProject,
  deleteProject,
  getProjectStats,
} from '../controllers/projectController.js';
import { authMiddleware } from '../middleware/auth.js';
import { validate, createProjectValidation, projectIdValidation } from '../middleware/validation.js';

const router = Router();

router.use(authMiddleware);

router.post('/', validate(createProjectValidation), createProject);
router.get('/', listProjects);
router.get('/:id', validate(projectIdValidation), getProject);
router.put('/:id', validate(projectIdValidation), updateProject);
router.delete('/:id', validate(projectIdValidation), deleteProject);
router.get('/:id/stats', validate(projectIdValidation), getProjectStats);

export default router;
