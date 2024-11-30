import toast from 'react-hot-toast';

export const errorDeleteNotification = () => toast.error('Ocurrió un error al eliminar la tarea');
export const successfulDelete = () => toast.success('Tarea eliminada');
