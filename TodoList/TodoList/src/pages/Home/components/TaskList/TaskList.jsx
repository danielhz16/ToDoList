import { useState } from 'react';
import Delete from './components/Delete/Delete';
import Menu from './components/menu/Menu';
import useDeleteTask from './hooks/useDeleteTask';
import TaskStatus from './components/TaskStatus/TaskStatus';
import { Li } from './styledComponents/Li';
import { taskDelete } from './functions/taskDelete';
import EditTask from '../EditTask/EditTask';

const TaskList = ({ data, error, loading, refetch }) => {
  const { deleteTask, errorDelete } = useDeleteTask();
  const [formEdit, setFormEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null); 

  if (loading) return <strong>Cargando...</strong>;
  if (error) return <strong>{error.message || 'Ocurrió un error inesperado'}</strong>;

  const handleTaskClick = (taskId) => {
    setShowMenu((prevState) => (prevState === taskId ? null : taskId));
  };

  const handleEdit = (task) => {
    setShowMenu(null);
    setSelectedTask(task);  
    setFormEdit(true); 
  };

  return (
    <>
      {formEdit && (
        <EditTask
          value={selectedTask.Task} 
          taskId={selectedTask.ID}    
          refetch={refetch}
          close={() => setFormEdit(false)} 
        />
      )}

      <ul>
        {data.map((task) => (
          <Li key={task.ID}>
            <TaskStatus completed={task.Completed} />
            <strong onClick={() => handleTaskClick(task.ID)}>{task.Task}</strong>  
            <Delete onClick={() => taskDelete(task.ID, errorDelete, deleteTask, refetch)} />
            
            
            {showMenu === task.ID && (
              <Menu
                status={task.Completed}
                taskId={task.ID}
                refetch={refetch}
                edit={() => handleEdit(task)} 
              />
            )}
          </Li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
