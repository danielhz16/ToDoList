import { errorCreatingTask, invalid, taskCreatedSuccessfully } from '../notifications/writeTaskNotifications';

export const submitTask = async (e, task, createTask, refetch) => {
    e.preventDefault();
    if(!task) {
      invalid();
      return;
    }
    
      try {
        await createTask(task);
        taskCreatedSuccessfully();
        refetch();
      } catch(error) {
        errorCreatingTask();
      };
     
  };
  