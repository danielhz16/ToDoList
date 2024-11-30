import styled from 'styled-components';

export const Btn = styled.button`
 border: none;
 border-radius: 5px;
 padding: 12px;
 background-color: ${({ theme }) => theme.default};
 cursor: pointer;
 &.confirm {
    background-color: ${({ theme }) => theme.confirm};
  }
  &.cancel {
    background-color: ${({ theme }) => theme.cancel};
  }
`