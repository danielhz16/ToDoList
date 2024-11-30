import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;
 background-color: ${( { theme }) => theme.primary};
 width: 30rem;
 display: grid;
 place-items: center;
 padding: 15px;
 border-radius: 10px;
  button {
   width: 4rem;
  }
`
