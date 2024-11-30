import toast from 'react-hot-toast';

export const errorEditingTask = () => toast.error('No se pudo eliminar la tarea');
export const taskEditedSuccessfully  = () => toast.success('Tarea editada correctamente');
export const emptyTask = () => toast.error('Escribe una nueva tarea');