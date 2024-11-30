import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 6rem;
  height: 3.5rem;
  background-color: black;
  border-radius: 1rem;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  
  &:hover {
    transform: translateY(-4px); 
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.15); 
  }

  .moon {
    transform: translateX(3rem);
    transition: transform 0.3s ease;
  }

  .sun {
    color: #ffff00;
  }
`;
