import { useState } from 'react';
import { useEdit } from './hooks/useEdit';
import { Overlay } from './styledComponents/Overlay';
import { Form } from './styledComponents/Form';
import { FlexContainer } from '../../../../styledComponents/FlexContainer';
import Button from '../../../../components/Button/Button';
import { TextArea } from './styledComponents/TextArea';
import { submitTask } from './functions/submitTask';

const EditTask = ({ value, taskId, refetch, close }) => {
  const [newTask, setNewTask] = useState(value);
  const { loadingEdit, errorEdit, successEdit, editTask } = useEdit();

  return (
    <>
      <Overlay />
      <Form onSubmit={(e) => submitTask(e, editTask, newTask, taskId, refetch, close)}>
        <TextArea
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          placeholder="Editar tarea"
        />
        <FlexContainer>
          <Button text="Cancelar" onClick={close} />
          <Button confirm text="Confirmar" type="submit" />
        </FlexContainer>
      </Form>
      {loadingEdit && <div>Cargando...</div>}
      {errorEdit && <div style={{ color: 'red' }}>Error: {errorEdit}</div>}
      {successEdit && <div>Tarea editada con éxito!</div>}
    </>
  );
};

export default EditTask;
