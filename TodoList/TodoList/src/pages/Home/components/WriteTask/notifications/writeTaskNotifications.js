import { toast } from 'react-hot-toast';

export const invalid = () => toast.error('Escribe una tarea');
export const errorCreatingTask = () => toast.error('Error al crear tarea');
export const taskCreatedSuccessfully = () => toast.success('Tarea agregada');
