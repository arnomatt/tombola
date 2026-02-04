import { useNavigate } from 'react-router';
import './Landing.css';

interface LandingProps {
    setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

export const Landing = (props: LandingProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        props.setModalVisibility(true);
    }

    const handleNavigate = () => {
        navigate(`/tabellone`);
    }

    return (
        <div className='landing'>
            <h1>🫘 Welcome to Tombola! 🫘</h1>
            <p className='subtitle'>Il gioco classico italiano che unisce famiglie e amici!</p>

            <div className='instructions'>
                <h2>Come Giocare:</h2>
                <ul>
                    <li>📋 <strong>Scegli Cartelle</strong> per selezionare un numero di cartelle con cui giocare</li>
                    <li>🎯 <strong>Scegli Tabellone</strong> per essere il tabellone (ed estrarre i numeri!)</li>
                </ul>
            </div>

            <div className='landingButtons'>
                <button
                    className='mainButton'
                    onClick={handleClick}
                >Cartelle</button>
                <button
                    className='mainButton'
                    onClick={handleNavigate}
                >Tabellone</button>
            </div>

            <p className='enjoy'>🎉 Buon Divertimento! 🎉</p>

            <p className='author'>by Matteo Arno</p>
        </div>
    )
}