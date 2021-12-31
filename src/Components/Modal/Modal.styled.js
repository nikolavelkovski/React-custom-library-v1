import styled from "styled-components";

const headerElementsColor = (props) =>
  props.type === "info-warning"
    ? `
  color:#856404;`
    : props.type === "info-success"
    ? `color: #155724`
    : props.type === "info-danger"
    ? `color: #721c24`
    : `color: #222`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
  z-index: 30;
  min-width: 30%;
  max-width: 40%;
  & > header,
  & > footer {
    ${(props) =>
      props.type === "info-warning"
        ? `
        background-color:#fff3cd`
        : props.type === "info-success"
        ? `
        background-color: #d4edda;`
        : props.type === "info-danger"
        ? `background-color:#f8d7da;`
        : ""}
  }
  & > header h3 {
    ${headerElementsColor}
  }

  span {
    font-size: 35px;
    margin: -5px;
    align-self: flex-start;
    cursor: pointer;
    ${headerElementsColor}
  }

  button:first-of-type {
    ${(props) =>
      props.type !== "form"
        ? `
        margin : 0 auto;
        padding: 15px;
        font-weight: 700; `
        : null}

    ${(props) =>
      props.type === "info-warning"
        ? `
              background-color:#ffc107;
              color:#212529;`
        : props.type === "info-success"
        ? `
              background-color: #28a745;`
        : props.type === "info-danger"
        ? `background-color:#dc3545;`
        : ""}
  }
`;

export const ModalHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  text-transform: capitalize;
`;
export const ModalContent = styled.div`
  width: 95%;
  padding: 30px;
  background: #fff;
  border-bottom: 1px solid #ccc;
`;
export const ModalFooter = styled.footer`
  background: #fff;
  display: flex;
  justify-content: flex-end;
  padding: 5px 20px;
`;
export const CloseButton = styled.button`
  border-radius: 3px;
  color: #ffffff;
  background: red;
  margin: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
export const SubmitButton = styled.button`
  border-radius: 3px;
  color: #fff;
  background: green;
  margin: 5px -5px 5px 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const ShowModalButton = styled.button`
  border-radius: 10px;
  color: green;
  font-weight: bold;
  padding 15px;
  cursor:pointer;
  border: 5px solid green;
  

  &:hover {
    box-shadow: inset 400px 0px 0px green;
    color: #fff;
    border-color:  #17a2b8;
    transition: all 0.7s !important;
    
  }
`

