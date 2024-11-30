import { MenuContainer } from "./styledComponents/MenuContainer"
import { Li } from "./styledComponents/Li";
import { useStatus } from "./hooks/useStatus";

const Menu = ({ status, taskId, refetch,edit }) =>  {
  const { changeStatus, loading, error, success} = useStatus();
  return (
   <MenuContainer>
     <Li onClick={() => { 
      changeStatus(taskId)
      refetch();
      }}>{status ? 'Tarea incompleta' : 'Completar tarea'}</Li>
      <Li onClick={edit}>Editar</Li>
   </MenuContainer> 
);
  }

export default Menu;