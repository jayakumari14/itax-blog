import styled, { css } from 'styled-components';

export const HoveringNavCard = styled.button`
    padding: 4px 0;
    color: #2a275d;
    background-color: #f0f0f1;
    border-radius: ${(props) => props.radius};
    border: none;
    font-weight: 600;
    transition: all ease-in 0.2s;

    &:hover {
        color: white;
        background-color: rgb(0, 85, 212);
    }

    ${(props) =>
        props.active &&
        css`
            color: white;
            background-color: rgb(0, 85, 212);
        `}

    width: ${(props) => props.width};
`;