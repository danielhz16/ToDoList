import styled from "styled-components";

export const Form = styled.form`
    border-radius: 10px;
    z-index: 99;
    display: grid;
    place-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;
    height: 40rem;
    background-color: ${({ theme }) => theme.primary};
`