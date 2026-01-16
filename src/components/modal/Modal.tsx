import { useContext } from 'react';
import './Modal.css';
import { ModalContext } from '../../contexts/modalContext';

export const Modal = () => {
    const context = useContext(ModalContext);

    return (
        <div className='modal'>
            <button onClick={() => context?.setModalVisibility(false)} className='closeButton'>X</button>
            <button>1 Cartella</button>
            <button>2 Cartelle</button>
            <button>3 Cartelle</button>
            <button>4 Cartelle</button>
            <button>5 Cartelle</button>
            <button>6 Cartelle</button>
        </div>
    )
}