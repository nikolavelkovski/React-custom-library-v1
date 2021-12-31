import styled from "styled-components";

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Tooltip = styled.span`
  position: absolute;
  border-radius: 5px;
  width: fit-content;
  padding: 3px 5px;

  transform: translateX(-50%);
  font-size: 10px;
  z-index: 1000;
  color: ${(props) => props.textColor || "#000"};
  background: ${(props) => props.background || "#17a2b8"};

  ${(props) =>
    props.direction === "left"
      ? `
    left:-50%;
    top: 40%;
   
    `
      : props.direction === "right"
      ? `
    right: -130%;
    top:40%;
    `
      : props.direction === "top"
      ? `
    top:-5%;
   left:50%;
   
  `
      : props.direction === "bottom"
      ? `
      bottom:-10%;
      left:50%;
    `
      : props.direction === "bottom-right"
      ? `
    bottom:-10%;
    right:-100%;
  `
      : props.direction === "bottom-left"
      ? `
  bottom:-10%;
  left:-20%;
`
      : props.direction === "top-left"
      ? `
      top: -10%;
      left: -20%;
`
      : props.direction === "top-right"
      ? `
    top: -10%;
    right: -100%;
`
      : null}
`;
