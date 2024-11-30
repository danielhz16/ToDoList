import { successfulDelete, errorDeleteNotification } from "../notifications/delete";
export const taskDelete = async (taskId, errorDelete, deleteTask, refetch) => {
    try {
      await deleteTask(taskId);
      if (!errorDelete) { 
        refetch();
        successfulDelete();
        return;
      } 
        errorDeleteNotification(); 
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      errorDeleteNotification(); 
    }
  };
