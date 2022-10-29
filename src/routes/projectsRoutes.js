import { Router } from 'express';
import { getProjects, getProject, createProject, updateProject, deleteProject, getProjectTasks } from '../controllers/projectsController.js';
const router = Router();

// endpoints
router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

router.get('/projects/:id/tasks', getProjectTasks);

export default router;