import { useEffect, useRef, useState } from 'react';
import './Modal.css';
import { useNavigate } from 'react-router';
interface ModalProps {
    setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = (props: ModalProps) => {
    const { setModalVisibility } = props;
    const navigate = useNavigate();
    const modalRef = useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleClickOutsideModal = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setModalVisibility(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutsideModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal)
        }
    }, [setModalVisibility])

    const handleClick = (num?: number) => {
        if (num) {
            navigate(`/cartelle/${num}`);
        } else {
            navigate(`/cartelle`);
        }
        setIsClosing(true);
    }

    const handleAnimationEnd = () => {
        if (isClosing) {
            setModalVisibility(false);
            setIsClosing(false);
        }
    }

    return (
        <div className={isClosing ? 'modal closing' : 'modal'} ref={modalRef} onAnimationEnd={handleAnimationEnd}>
            <div className='buttons'>
                {Array.from({ length: 8 }).map((_, i) => <button className='btnhover' onClick={() => handleClick(i + 1)}>{i + 1} {i === 0 ? 'Cartella' : 'Cartelle'}</button>)}
                <button className='btnhover' onClick={() => setModalVisibility(false)}>Close</button>
            </div>
        </div >
    )
}