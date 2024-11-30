import { useState } from "react";

const useDeleteTask = () => {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [errorDelete, setErrorDelete] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const reset = () => {
    setErrorDelete(null);
    setSuccessMessage('');
  };

  const deleteTask = async (id) => {
    setLoadingDelete(true);
    setErrorDelete(null);
    setSuccessMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}deleteTask/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        setErrorDelete('error')
        throw new Error('Task not found or failed to delete');
      }

      const result = await response.json();
      setSuccessMessage(result.message);
      setErrorDelete(null);
    } catch (error) {
      setErrorDelete(error.message || 'Unable to connect to server');
    } finally {
      setLoadingDelete(false);
    }
  };

  return { deleteTask, loadingDelete, errorDelete, successMessage, reset };
};

export default useDeleteTask;