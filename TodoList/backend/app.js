import express from 'express';
import cors from 'cors'
import tasks from './src/routes/tasks.route.js'

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(tasks);

export default app;