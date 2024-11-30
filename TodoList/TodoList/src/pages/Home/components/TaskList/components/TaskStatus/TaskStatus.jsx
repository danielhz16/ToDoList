import { Status } from "./TaskSatusStyle";

const TaskStatus = ({ completed }) => {
    return (
      <>
        <Status className={completed ? 'completed' : 'incomplete'} />
      </>
    )
};

export default TaskStatus;