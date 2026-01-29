import './Landing.css';

export const Landing = () => {

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

            <p className='enjoy'>🎉 Buon Divertimento! 🎉</p>

            <p className='author'>by Matteo Arno</p>
        </div>
    )
}