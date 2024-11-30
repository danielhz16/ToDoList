import { useState } from 'react';

const useCreateTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const createTask = async (task) => {
    setLoading(true);
    setError(null);
  
    try {
      console.log(`${import.meta.env.VITE_BACKEND_URL}newTask`)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}newTask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Task: task }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la tarea');
        return false;
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createTask, loading, error, message };
};

export default useCreateTask;