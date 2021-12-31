import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  background: #17a2b8;

  @media (max-width: 660px) {
    flex-direction: column;

    ${(props) =>
      props.mobileIsShowed &&
      `
    margin-bottom: 100px;
    padding-bottom: 50px;
    `}
  }
`;

export const Logo = styled.span`
  display: inline-block;
  font-size: 24px;
  margin-left: 20px;
  font-family: Verdana;
  font-style: italic;
  font-weight: 700;
  padding: 5px;
  a {
    box-shadow: none !important;
  }
  @media (max-width: 860px) {
    margin-left: 3px;
    font-size: 16px;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0 !important;

  @media (max-width: 1024px) {
    gap: 0;
  }
  ${(props) =>
    props.mobileIsShowed
      ? `
  @media (max-width: 660px) {
    flex-direction: column;
    text-align: center;
    background: #17a2b8;
    width: 100%;
    gap: 10px;
  }
  `
      : `  @media (max-width: 660px) {
    display:none;
      }
  `}
`;
export const NavItem = styled.li`
  padding: 30px;
`;

export const NavLinks = styled(NavLink)`
    text-decoration:none;
    &:link ,
    &:visited {
        color #fff;
        padding:10px;
    }
    &:hover,
    &:active {
        font-weight:700;
        box-shadow: 0 0 3px #ccc;

    }


     
    &.active {
        font-weight: 700;
    }
    

`;
export const MobileButton = styled.span`
  padding: 10px;
  span {
    display: block;
    transform: rotate(90deg);
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  @media only screen and (max-width: 660px) {
    display: inline;
    position: absolute;
    right: 2%;
    top: 0;
    color: #fff;
  }
`;
