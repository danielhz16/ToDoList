import { getConnections } from '../database/connection.js';

export const getTasks = async (req, res) => {
  const pool = await getConnections();
  try {
   const response = await pool.request().query('SELECT ID, Task, Completed FROM Tasks');
   res.status(200).send(response)
  } catch(e) {
    res.status(404);
  }
};

export const newTask = async (req, res) => {
  const { Task } = req.body;

  if (!Task || typeof Task !== 'string') {
    return res.status(400).json({ error: 'Invalid task input' }); 
  }

  const pool = await getConnections();
  try {
    const response = await pool.request()
      .input('Task', Task)
      .query('INSERT INTO Tasks (Task, Completed) VALUES (@Task, 0)');

    res.status(201).json({ message: 'Task created successfully', response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params; 
  const taskId = parseInt(id, 10);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  const pool = await getConnections();
  try {
    const result = await pool.request()
      .input('ID', taskId)  
      .query('DELETE FROM Tasks WHERE ID = @ID');

    if (result.rowsAffected[0] > 0) {
      res.status(200).json({ message: 'Task deleted successfully' });
      return;
    } 
    res.status(404).json({ message: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Error when deleting task' });
  }
};

export const changeStatus = async (req, res) => {
  const { id } = req.params;

  const taskId = parseInt(id, 10);

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  try {
    const pool = await getConnections();
    const result = await pool.request()
      .input('ID', taskId)
      .query('UPDATE Tasks SET Completed = CASE WHEN Completed = 0 THEN 1 ELSE 0 END  WHERE id = @ID');

    if (result.rowsAffected[0] > 0) {
      return res.status(200).json({ message: 'Status changed successfully' });
    } 

    return res.status(404).json({ message: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  const { updateTask } = req.body;

  const taskId = parseInt(id, 10);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  if (!updateTask || updateTask.trim() === '') {
    return res.status(400).json({ error: 'Task description is required' });
  }

  try {
    const pool = await getConnections();
    const result = await pool.request()
      .input('ID', taskId)
      .input('Task', updateTask)
      .query('UPDATE Tasks SET Task = @Task WHERE id = @ID');

    if (result.rowsAffected[0] > 0) {
      return res.status(200).json({ message: 'Task updated successfully' });
    } 
      return res.status(404).json({ message: 'Task not found' });
  } catch (error) {
     res.status(500).json({ error: 'Internal server error' });
  }
};
