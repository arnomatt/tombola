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
                {Array.from({ length: 8 }).map((_, i) => <button onClick={() => handleClick(i + 1)}>{i + 1} {i === 0 ? 'Cartella' : 'Cartelle'}</button>)}
            </div>
            <button onClick={() => context?.setModalVisibility(false)}>Close</button>
        </div >
    )
}