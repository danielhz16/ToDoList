import { emptyTask, errorEditingTask, taskEditedSuccessfully } from "../notifications/editNotifications";

export const submitTask = async (e, editTask, newTask, taskId, refetch, close) => {
  e.preventDefault();
  if(!newTask) {
    emptyTask();
    return;
  }
  try {
    await editTask(newTask, taskId);
    taskEditedSuccessfully();
    refetch(); 
    close(); 
  } catch (error) {
    console.error('Error al editar la tarea:', error);
    errorEditingTask();
  }
};