import styled from "styled-components/macro";

export const ItemWrapper = styled.div`
  position: absolute;
  top: 0;
  /* hide the elements */
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  text-align: center;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  /* show element */
  ${(props) =>
    props.show &&
    `
    transition-duration: 0.9s;
    transform: scale(1.1);
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
 `}
`;
