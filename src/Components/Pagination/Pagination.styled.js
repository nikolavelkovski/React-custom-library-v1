import styled, {css} from "styled-components";

const prevNextButtonsStyle = css`
background: #fff;
border: none;
padding: 10px;
color: blue;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
margin: 0 10px;
cursor: pointer;


    ${(props) => props.disabled && `
    pointer-events: none;
    box-shadow: none;
    color: #999;
    `}
`



export const Next =styled.button`
    ${prevNextButtonsStyle}
`
export const Prev = styled.button`
    ${prevNextButtonsStyle}
`
 
export const PaginationWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

@media(max-width:660px){
    padding-bottom:50px;
} 
`

export const PaginationItemButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
background: #fff;
border: 2px solid #666;
padding: 10px 10px;
border-radius: 50%;
height:15px;
width: 15px;
position: relative;
margin: 0 5px;
cursor: pointer;

span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

    ${(props) => props.active && `
    border: 1px solid green;
    color: #fff;
    background-color:green;
    pointer-events: none;
    `}
`
export const ItemsContainer = styled.div`
    overflow-y:scroll;
    height: 500px;
    margin-bottom: 40px;
   




`