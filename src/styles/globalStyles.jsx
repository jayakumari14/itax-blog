import Link from "next/link";
import styled from "styled-components";
import { css } from "styled-components";

export const AddCartButton = styled.button`
  outline: none;
  border: none;
  padding: 10px 15px;
  background-color: rgb(0, 85, 212);
  border-radius: 5px;
  color: white;
  font-weight: 600;
  ${(props) =>
    props.disabled &&
    css`
      filter: opacity(0.5);
      cursor: not-allowed;
    `}
`;

export const RemoveCartButton = styled.button`
  outline: none;
  border: none;
  padding: 10px 15px;
  background-color: #f0f0f1;
  border-radius: 5px;
  color: black;
  font-weight: 600;
  ${(props) =>
    props.disabled &&
    css`
      filter: opacity(0.5);
      cursor: not-allowed;
    `}
`;
export const MainLink = styled(Link)`
  outline: none;
  border: none;
  padding: 10px 15px;
  background-color: rgb(0, 85, 212);
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  /* height: fit-content;
    width: fit-content; */
`;

export const HoveringButton = styled.button`
  padding: 5px 0;
  color: #2a275d;
  background-color: #f0f0f1;
  border-radius: ${(props) => props.radius};
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all ease-in 0.2s;

  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: rgb(0, 85, 212);
    `}

  &:hover {
    color: white;
    background-color: rgb(0, 85, 212);
  }
  width: ${(props) => props.width};
`;

export const StyledLink = styled(Link)`
  position: relative;
`;

export const Itag = styled.i`
  font-size: 10px;
  position: absolute;
  border-radius: 100%;
  padding: 0 5px;
  background-color: rgb(0, 85, 212);
  top: 10%;
  left: 50%;
  z-index: 100;
`;

export const NoData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  color: rgb(0, 85, 212);
  gap: 1rem;
  top: 50%;
  padding: 5rem;
  background-color: #eeeeef;
  border-radius: 1rem;
  transform: ${(props) => props.transform};
`;

export const PdfButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  font-weight: 600;
  font-size: large;
  border-radius: 5px;
  padding: 6px 8px;
  cursor: pointer;
  text-align: center;
  background-color: rgb(0, 85, 212);
`;

export const PdfIcon = styled.i`
  font-size: 1.5rem;
`;
