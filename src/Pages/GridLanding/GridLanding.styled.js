import * as Styled from './../../Components/Grid/Grid.styled';
import styled from "styled-components"

const centerDisplay = `
    display: flex;
    justify-content:center;
    align-items:center;
    text-transform: uppercase;
    font-weight:bold;
`
export const Heading = styled(Styled.Row)`
background:red;
    ${centerDisplay}
    height: 50px;
`

export const Main = styled(Styled.Row)`
background: blue;
${centerDisplay}
height: 300px;
`
export const Aside = styled(Styled.Row)`
background: green;
${centerDisplay}
`

export const Footer = styled(Styled.Row)`
background: purple;
height: 50px;
${centerDisplay}
`