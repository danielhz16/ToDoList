import styled from "styled-components";

export const Li = styled.li`
 position: relative;
 display: flex;
 gap: 1rem;
 margin: 12px;
 background-color: ${({ theme }) => theme.primary};
 width: 30rem;
 padding: 15px;
 border-radius: 10px;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
  &:hover {
    transform: translateY(-4px); 
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.15); 
  }
  svg {
    position: absolute;
    right: 1rem;
  }
`