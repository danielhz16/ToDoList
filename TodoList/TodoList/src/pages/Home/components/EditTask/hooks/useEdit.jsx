import { useState } from 'react';

export const useEdit = () => {
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [errorEdit, setErrorEdit] = useState(null);
  const [successEdit, setSuccessEdit] = useState(false);

  const editTask = async (newContent, taskId) => {
    setLoadingEdit(true);
    setErrorEdit(null);
    setSuccessEdit(false);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}editTask/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          updateTask: newContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorEdit(errorData.message || 'Failed to edit task');
        throw new Error('Failed to edit task');
      }

      setSuccessEdit(true); 
    } catch (error) {
      setErrorEdit(error.message || 'Something went wrong');
    } finally {
      setLoadingEdit(false);
    }
  };

  return {
    loadingEdit,
    errorEdit,
    successEdit,
    editTask,
  };
};
