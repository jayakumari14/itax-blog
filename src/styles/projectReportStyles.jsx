import styled from "styled-components"
import { css } from "styled-components"

export const InputBox = styled.div`
    padding-top: 1rem;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 7rem;
`
export const Option = styled.span`
    color: grey;
    font-size: 0.7rem;
    padding-left: 0.5rem;
`
export const LabelBox = styled.div`
    display: flex;
    align-items: center;
`
export const MultipleInputBox = styled.div`
display: flex;
gap: 2rem;
align-items: center;
margin-bottom: 1.5rem;
`

export const Heading = styled.div`
text-align: center;
color: rgb(1, 28, 75);
font-size: 1.4rem;
font-weight: 500;
margin-bottom:1rem;
`

export const Section = styled.div`
    
`
export const Button = styled.button`
position: relative;
left: 50%;
transform: translateX(-50%);
border: 1px solid grey;
border-radius: 5px;
background-color: white;
margin-top: 1rem;

 ${(props) =>
        props.disabled &&
        css`
       cursor: not-allowed;
           filter: opacity(0.4);

       &:hover{
           filter: opacity(0.4);
       }
    `}



`

export const MainHeading = styled.h1`
    text-align: center;
color: rgb(1, 28, 75);
font-size: 2rem;
font-weight: 600;
margin-bottom:1rem;
`
