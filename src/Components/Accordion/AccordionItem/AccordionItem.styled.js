import styled from "styled-components";

export const AccordionItem = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  box-shadow: 5px 5px 20px #ccc;
  gap: 20px 20px;
  margin-bottom: 20px;
  transition: 1s;
  cursor: pointer;

  p {
    font-size: 24px;
  }

  svg {
    height: 32px;
    width: 32px;
    fill: green;
    transition: 1s;
  }
  &:hover {
    background-color: ${(props) => props.background || "lightgreen;"};
  }

  &.active {
    p {
      color: ${(props) => props.headingFontColor || "green;"};
    }
    svg {
      transform: rotate(180deg);
      transition: 1s;
    }
  }
  &.active:hover {
    background: none;
  }
`;

export const AccordionItemContent = styled.div`
  grid-column: 2;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 1s;

  p {
    font-size: 18px;
    color: #000 !important;
  }
  &.active {
    max-height: 500px;
  }
`;
