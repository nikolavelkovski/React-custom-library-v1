import React from 'react';



 const ModalContext =React.createContext({
    visible: false,
    showModal : () => {},
    closeModal : () => {}
})


export default ModalContext;