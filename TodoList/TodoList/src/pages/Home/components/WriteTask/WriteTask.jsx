import { useState } from "react";
import useCreateTask from "./hooks/useCreateTask";
import { submitTask } from "./functions/submitTask";
import { Container } from "./styledComponets/Container";
import { FlexContainer } from '../../../../styledComponents/FlexContainer';
import { Input } from "./styledComponets/Input";
import Button from '../../../../components/Button/Button';
import Counter from "./components/Counter/Counter";

const WriteTask = ({ refetch }) => {
  const [task, setTask] = useState('');
  const { createTask, loading, error, message } = useCreateTask();

  return (
    <Container>
      <form onSubmit={(e) => submitTask(e, task, createTask, refetch)}>  
        <FlexContainer>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button text="+" confirm />
        </FlexContainer>
         <Counter number={task.length} />
        {loading && <p>Agregando tarea...</p>}
        {error && <p>Error: {error}</p>}
        {message && <p>{message}</p>}
      </form>
    </Container>
  );
};

export default WriteTask;
