import './Tabellone.css';
import '../components/cartelle/Cartella.css';
import { useState } from 'react';

const useTabellone = (): [Map<number, boolean>, (number: number) => void] => {
    const tabelloneMap = new Map<number, boolean>();
    Array.from({ length: 90 }).map((_, i) => tabelloneMap.set(i + 1, false));

    const [tabellone, setTabellone] = useState(tabelloneMap);

    const handleClick = (num: number) => {
        setTabellone(prev => {
            const newTabellone = new Map(prev);
            newTabellone.set(num, !newTabellone.get(num))
            return newTabellone;
        })
    }


    return [tabellone, handleClick];
}

export const Tabellone = () => {
    const [tabellone, handleClick] = useTabellone();

    return (
        <div className='container'>
            <div className='tabellone'>
                {Array.from(tabellone.entries()).map(([key, selected]) =>
                    <button
                        className={selected ? 'casella selezionata' : 'casella'}
                        onClick={() => handleClick(key)}
                    >
                        {key}
                    </button>
                )}
            </div>
        </div >
    )
}