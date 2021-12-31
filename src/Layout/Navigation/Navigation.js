import { useState } from "react";
import styled from "styled-components";
import * as Styled from "./Navigation.styled";

const Navigation = () => {
  const [isShowed, setIsShowed] = useState(false);
  const toggleMobileNavigationHandler = () => {

    setIsShowed((prevIsShowedState) => !prevIsShowedState);
  };

  return (
    <>
      <Styled.Header mobileIsShowed = {isShowed}>
        <Styled.Logo>
          <Styled.NavLinks to="/">Nikola's Library</Styled.NavLinks>
          <Styled.ButtonContainer onClick= {toggleMobileNavigationHandler}>
          <Styled.MobileButton>
          {!isShowed ? (             
              <span>|||</span>
          ) : (
            "X"
          )}
          </Styled.MobileButton>
            
          </Styled.ButtonContainer>
        </Styled.Logo>
        <Styled.NavList mobileIsShowed = {isShowed}>
          <li>
            <Styled.NavLinks to="/">Home</Styled.NavLinks>
          </li>
          <li>
            <Styled.NavLinks to="/Modal">Modal</Styled.NavLinks>
          </li>
          <li>
            <Styled.NavLinks to="/Accordion">Accordion</Styled.NavLinks>
          </li>
          <li>
            <Styled.NavLinks to="/Tooltip">Tooltip</Styled.NavLinks>
          </li>
          <li>
            <Styled.NavLinks to="/Carousel">Carousel</Styled.NavLinks>
          </li>
          <li>
            <Styled.NavLinks to="/Pagination">Pagination</Styled.NavLinks>
          </li>
          <li>
            <Styled.NavLinks to="/Grid">Grid</Styled.NavLinks>
          </li>
        </Styled.NavList>
      </Styled.Header>
    </>
  );
};

export default Navigation;
