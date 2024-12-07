import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 14rem;
  min-height: 14rem;
  padding-top: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 3px 8px ${(props) => props.shadow || 'rgb(0, 85, 212, .4)'};
  border-radius: 10px;
  overflow: hidden;
`;

export const CardContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  min-width: 13rem;
  min-height: 14rem;
  padding-top: 1.5rem;
  gap: 4rem;
  background-color: #ffffff;
  // box-shadow: 0 3px 8px ${(props) => props.shadow || 'rgb(0, 85, 212, .4)'};
  border-radius: 10px;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 82px;
  height: 82px;
  margin-right: 16px;
`;

export const Text = styled.p`
  font-size: 16px;
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: white;
  background-color: ${(props) => props.color || 'rgb(0, 85, 212)'};
  font-weight: 500;
`;

const Card = ({ logo, text, href, color, shadow, children }) => (
  <>
    {href ? (
      <CardContainer href={href} target="_main" color={color} shadow={shadow}>
        {logo && <Logo src={logo} alt="Logo" />}
        {children && <Text color={color}>{children}</Text>}
      </CardContainer>
    ) : (
      <CardContainerDiv
        href={href}
        className="shadow-md border"
        target="_main"
        color={color}
        shadow={shadow}
      >
        {text && <p className="font-bold text-2xl text-slate-800">{text}</p>}
        {children && <Text color={color}>{children}</Text>}
      </CardContainerDiv>
    )}
  </>
);

export default Card;
