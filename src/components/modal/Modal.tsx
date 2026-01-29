import { useContext, useEffect, useRef } from 'react';
import './Modal.css';
import { ModalContext } from '../../contexts/ModalContext';
import { useNavigate } from 'react-router';

export const Modal = () => {
    const context = useContext(ModalContext);
    const navigate = useNavigate();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutsideModal = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                context?.setModalVisibility(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutsideModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal)
        }
    }, [context])

    const handleClick = (num?: number) => {
        if (num) {
            navigate(`/cartelle/${num}`);
        } else {
            navigate(`/cartelle`);
        }
        context?.setModalVisibility(false);
    }

    return (
        <div className='modal' ref={modalRef}>
            <div className='buttons'>
                <button onClick={() => handleClick(1)}>1 Cartella</button>
                <button onClick={() => handleClick(2)}>2 Cartelle</button>
                <button onClick={() => handleClick(3)}>3 Cartelle</button>
                <button onClick={() => handleClick(4)}>4 Cartelle</button>
                <button onClick={() => handleClick(5)}>5 Cartelle</button>
                <button onClick={() => handleClick(6)}>6 Cartelle</button>
                <button onClick={() => handleClick(7)}>7 Cartelle</button>
                <button onClick={() => handleClick(8)}>8 Cartelle</button>
            </div>
            <button onClick={() => context?.setModalVisibility(false)}>Close</button>
        </div >
    )
}