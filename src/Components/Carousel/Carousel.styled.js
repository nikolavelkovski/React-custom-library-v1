import styled from "styled-components/macro";

export const CarouselWrapper = styled.div`
  width: 50%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const Slider = styled.div`
  width: 80%;
  height: 80%;
`;

export const LeftArrow = styled.button`
  position: absolute;
  top: 55%;
  left: 32%;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border: none;
   @media only screen and (max-width: 600px) {
  
  }
`;
export const RightArrow = styled.button`
  position: absolute;
  top: 55%;
  right: 32%;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border: none;
`;

export const DotButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background: #777;
  cursor: pointer;

  ${(props) =>
    props.activeSlide &&
    `
        background:green;
    `}
`;

export const DotsContainer = styled.div`
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
width:80%;
position:absolute;
bottom:0;
`;
