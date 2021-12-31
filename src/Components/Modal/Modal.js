
import  * as Styled  from "./Modal.styled";
import { useContext } from 'react';
import ModalContext from "../../store/modal-context";
import  ReactDOM  from "react-dom";

const Backdrop =  (props) => {
    return <Styled.Backdrop onClick = {props.onClick} />
};


const ModalOverlay  = (props) => {
    const ctx =useContext(ModalContext);  
    return (    
        <Styled.Modal type = {props.attr.type}>
        <Styled.ModalHeader>
        <Styled.ModalTitle>{props.attr.title}</Styled.ModalTitle>
        <span onClick= {ctx.closeModal}>&times;</span>
        </Styled.ModalHeader>
        <Styled.ModalContent>
            <p>{props.attr.message}</p>
        </Styled.ModalContent>
        <Styled.ModalFooter>
            <Styled.CloseButton onClick= {ctx.closeModal}>{props.attr.type !== 'form' ? 'Okay' : 'Close Form'}</Styled.CloseButton> 
            {props.attr.type === 'form' &&
            <Styled.SubmitButton>Submit Form</Styled.SubmitButton>
            }
            
        </Styled.ModalFooter>
    </Styled.Modal>
    )}
const Modal = (props) => {
    const ctx =useContext(ModalContext);
    const portalElement = document.getElementById('overlays'); 
    return (
       <>
       <h1>Modal example</h1>
       <p>You can change modals to danger,warning ,form modal</p>
        <Styled.ShowModalButton onClick ={ctx.showModal}><span>CLICK TO SHOW THE MODAL</span></Styled.ShowModalButton>
        { ctx.visible && ReactDOM.createPortal(<Backdrop onClick ={ctx.closeModal} />,portalElement)}
        { ctx.visible && ReactDOM.createPortal(<ModalOverlay attr ={props}/>,portalElement)}
        
        </>
    )
}

export default Modal;