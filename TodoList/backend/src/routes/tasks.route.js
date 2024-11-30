import { Router } from 'express';
const router = Router();
import { getTasks, newTask, deleteTask, changeStatus, editTask } from '../controllers/tasks.controllers.js';

router.get('/tasks', getTasks);
router.post('/newTask', newTask);
router.delete('/deleteTask/:id', deleteTask);
router.patch('/changeStatus/:id', changeStatus);
router.patch('/editTask/:id', editTask);

export default router;
