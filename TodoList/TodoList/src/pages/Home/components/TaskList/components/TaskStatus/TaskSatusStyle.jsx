import styled from "styled-components";

export const Status = styled.div`
 width: 1rem;
 height: 1rem;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.cancel};
  &.completed {
    background-color: ${({ theme }) => theme.confirm};
  }
`