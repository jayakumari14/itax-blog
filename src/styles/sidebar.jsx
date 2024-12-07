import styled, { css } from "styled-components";

export const SideBar = styled.div`
  max-width: 300px;
  width: ${props => (props.isOpen ? '250px' : '0')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  z-index: 1;
  word-break: keep-all;
  transition: width 0.3s ease-in-out, opacity 0.150s ease-in-out;

  position:sticky;
  top:0rem;
  padding-top: 1.5rem;

  ${props =>
    !props.isOpen &&
    css`
      width: 0;
      opacity: 0;
      overflow: hidden;
    `}

    @media only screen and (max-width: 48em) {
      position: absolute;
      background-color: rgb(244 244 245);
      height: 100%;
    }
`;