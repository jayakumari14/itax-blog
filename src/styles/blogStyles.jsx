import styled from "styled-components";
// import { BsFillEyeFill } from "react-icons/bs"
// import { createElement } from "react";
// import { render } from "react-dom";
// import { renderToStaticMarkup } from "react-dom/server";

// const reactSvgComponentToMarkupString = (Component, props) =>
//     `data:image/svg+xml,${encodeURIComponent(
//         renderToStaticMarkup(createElement(Component, props))
//     )}`;

// export const Box = styled.div`
//     width: 80%;
//     margin: auto;
//     margin-top: 3rem;
//     padding-bottom: 3rem;

// `

export const Image = styled.img`
  width: 100%;
  object-fit: contain;

  // export const InfoContainer = styled.div
`;
// display: flex;
// `

export const DateBox = styled.div`
  color: #696968;
  background-color: #bcbcbc;
  display: flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 100px;
  max-height: 100px;
  min-height: 100px;
  padding-left: 10px;
  padding-top: 1rem;
  top: 5%;
  right: 1%;
  border-radius: 5px 0 0 5px;
  /* transform: translateY(-50%); */
`;

// export const ContentBox = styled.div`
// color:#696968 ;
// padding: 2rem 5rem 3rem 5rem;
// background-color: white;
// width: 100%;
// `

// export const BlogTitle = styled.h4`
//     color: black;
//     cursor: pointer;
//     max-width: fit-content;
//     font-size: 2.25rem/* 36px */;
//     line-height: 2.5rem/* 40px */;
//     font-weight: 500;
//     &::before{
//         content:${({ color }) =>
//         `url(${reactSvgComponentToMarkupString(BsFillEyeFill, {
//             color
//         })})`};
//         position:absolute;
//         transform:translateX(-150%);
//         opacity:0;
//     }
//     &:hover:before{
//         opacity:1;
//     }
//     &:hover{
//         color: #2a275d;
//     }
// `
// export const BlogPara = styled.p`
//     padding-top: 1.5rem;
//     height: 170px;
//     overflow: hidden;
//     display: -webkit-box;
//     -webkit-line-clamp:6;
//     -webkit-box-orient:vertical;
//     margin-bottom: 1rem;
// `
