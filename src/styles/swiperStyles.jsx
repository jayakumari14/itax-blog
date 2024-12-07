import styled from "styled-components"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { css } from "styled-components";


export const Flex = styled.div`
  display: flex;

  ${(props) =>
        props.spaceBetween &&
        css`
      justify-content: space-between;
    `}

  ${(props) =>
        props.alignCenter &&
        css`
      align-items: center;
    `}

    ${(props) =>
        props.column &&
        css`
      flex-direction: column;
    `}
        
    ${(props) =>
        props.justifyCenter &&
        css`
      justify-content: center;
    `}
    gap:${(props) => props.gap};
    padding:${props => props.padding}
`;

export const ArrowBack = styled(MdArrowBackIos)`
  font-size: 3rem;
  cursor: pointer;
  transition: all ease-out 0.1s;
`;
export const ArrowNext = styled(MdArrowForwardIos)`
  font-size: 3rem;
  transition: all ease-out 0.1s;
  cursor: pointer;
`;
export const ButtonDiv = styled(Flex)`
  position: absolute;
  cursor: pointer;
  height: 100%;
  /* z-index: 10; */
  /* top: 50%; */
  transform: translateY(-10%);
  padding: 20px;
  transition: all ease-out 0.1s;


  
  ${(props) =>
        props.next &&
        css`
      right: -6%;
       &:hover ${ArrowNext} {
        font-size: 4rem;
      }
      `}

      ${props => props.hidePrev && css`
      display: none;
      `}
      
      ${(props) =>
        props.prev &&
        css`
    left: -6%;
     &:hover ${ArrowBack} {
      font-size: 4rem;
    }
    `}
    `;

