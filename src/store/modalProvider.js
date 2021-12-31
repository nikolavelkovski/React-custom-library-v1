import ModalContext from "./modal-context";
import { useState } from "react";

const ModalProvider = props => {
    const [isVisible,setIsVisible] = useState(false)
    const closeModalHandler = () => {
        setIsVisible(false);
    }
    const showModalHandler = () => {
        debugger;
        setIsVisible(true);
    }
    const modalContext = {
        visible : isVisible,
        closeModal : closeModalHandler,
        showModal : showModalHandler,
    }
    return <ModalContext.Provider value={modalContext}>
        {props.children}
    </ModalContext.Provider>
}

export default ModalProvider;