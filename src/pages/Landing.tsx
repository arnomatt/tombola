import { useNavigate } from "react-router";
import './Landing.css';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className='landing'>
            <button onClick={() => navigate('/cartelle')}>Cartelle</button>
            <button onClick={() => navigate('/tabellone')}>Tabellone</button>
        </div>
    )
}