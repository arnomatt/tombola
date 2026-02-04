import './Tabellone.css';
import '../components/cartelle/Cartella.css';

export const Tabellone = () => {
    return (
        <div className='container'>
            <div className='tabellone'>
                {Array.from({ length: 90 }).map((_, i) => <div className='casella'>{i + 1}</div>)}
            </div>
        </div >
    )
}