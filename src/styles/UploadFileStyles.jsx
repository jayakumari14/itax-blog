import styled,{keyframes} from "styled-components"

export const Card = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    border: 2px dashed #2a275d ;
    /* overflow: hidden; */
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 2rem;
`

export const UploadBox = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
flex-direction: column;
align-items: center;
`

export const NameSection=styled.section`
width: 100%;
display: flex;
padding: 5px 20px;
color: white;
background-color: #0055d4;
position: relative;
align-items: center;
gap: 10px;
justify-content: space-between;
/* transform: translateY(-80%); */
top: 100%;
`
export const Image=styled.img`
    
    max-height: 180px;
    width: 100%;

`

export const ProgressBox=styled.div`
display: flex;
 flex-direction: column; 
gap: 5px;
/* align-items: center;  */
`
const loadingAnimation = keyframes`
 0% { height: 5px; width: 1px; }
 30% { height: 5px; width: 40px; opacity: 1 }
 40% { height: 5px; width: 70px; opacity: 1; }
 100% { height: 5px; width: 150px; opacity: 1; }
`

export const ProgressBar=styled.i`
    width: 150px;
    padding: 2.5px;
    background-color: #0055d4;
    border-radius: 5px;
    animation-name: ${loadingAnimation};
    animation-duration: 2s;
    animation-iteration-count:none;
`
