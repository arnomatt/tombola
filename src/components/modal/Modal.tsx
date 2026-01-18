import { useContext } from 'react';
import './Modal.css';
import { ModalContext } from '../../contexts/ModalContext';
import { useNavigate } from 'react-router';

export const Modal = () => {
    const context = useContext(ModalContext);
    const navigate = useNavigate();

    const handleClick = (num?: number) => {
        if (num) {
            navigate(`/cartelle/${num}`);
        } else {
            navigate(`/cartelle`);
        }
        context?.setModalVisibility(false);
    }

    return (
        <div className='modal'>
            <button onClick={() => context?.setModalVisibility(false)} className='closeButton'>X</button>
            <button onClick={() => handleClick(1)}>1 Cartella</button>
            <button onClick={() => handleClick(2)}>2 Cartelle</button>
            <button onClick={() => handleClick(3)}>3 Cartelle</button>
            <button onClick={() => handleClick(4)}>4 Cartelle</button>
            <button onClick={() => handleClick(5)}>5 Cartelle</button>
            <button onClick={() => handleClick(6)}>6 Cartelle</button>
            <button onClick={() => handleClick(7)}>7 Cartelle</button>
            <button onClick={() => handleClick(8)}>8 Cartelle</button>
        </div >
    )
}