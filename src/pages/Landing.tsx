import { useNavigate } from "react-router";
import './Landing.css';
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const Landing = () => {
    const modalContext = useContext(ModalContext);
    const navigate = useNavigate();

    return (
        <div className='landing'>
            <button onClick={() => modalContext?.setModalVisibility(true)}>Cartelle</button>
            <button onClick={() => navigate('/tabellone')}>Tabellone</button>
        </div>
    )
}