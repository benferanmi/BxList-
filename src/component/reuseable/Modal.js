import React, {useEffect} from 'react'

const Modal = ({modalContent, closeModal}) => {
    useEffect(()=> {
        setTimeout(() => {
            closeModal();
        }, 3000)
    })
    return (
        <>
        <p className='modal-content'>{modalContent}</p>
        </>
    )
}

export default Modal