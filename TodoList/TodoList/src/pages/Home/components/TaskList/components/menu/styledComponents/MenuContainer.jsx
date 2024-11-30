import styled from "styled-components";

export const MenuContainer = styled.ul`
    z-index: 99;
    display: grid;
    place-items: center;
    position: absolute;
    padding: 1rem;
    right: 5rem;
    top: 1rem;
    width: 12rem;
    background-color: ${({ theme }) => theme.menu};
    color: ${({ theme }) => theme.textMenu};
    border-radius: 5px;
    cursor: pointer;
`