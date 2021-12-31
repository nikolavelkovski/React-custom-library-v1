import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 4.2rem));
  grid-template-rows: max-content;
  gap: ${(props) => props.gap || "10px"};
  margin: ${(props) => props.margin || "10px"};

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
    gap: ${(props) => props.gap || "8px"};
    margin: ${(props) => props.margin || "8px"};
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${(props) => props.gap || "5px"};
    margin: ${(props) => props.margin || "5px"};
  }
`;

export const Row = styled.div`
  grid-column-start: ${(props) => props.sd || "1"};
  grid-column-end: ${(props) => props.ed || "-1"};

  @media only screen and (max-width: 600px) {
    grid-column-start: ${(props) => (props.sm ? props.sm : "1")};
    grid-column-end: span ${(props) => (props.em ? props.em : "6")};
  }

  @media only screen and (max-width: 800px) {
    grid-column-start: ${(props) => (props.ss ? props.ss : "1")};
    grid-column-end: span ${(props) => (props.es ? props.es : "4")};
  }
`;
