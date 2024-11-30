import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
   &:hover {
    background-color: ${({ theme }) => theme.hover};
   }
}

 body, html, #root {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: monospace, sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;
 }

 @media (min-width: 768px) {
  html,
  body {
    font-size: 1vw;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  html,
  body {
    font-size: 1.5vw;
  }
}

@media (max-width: 767px) {
  html,
  body {
    font-size: 2vw;
  }
}
`