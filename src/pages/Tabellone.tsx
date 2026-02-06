import './Tabellone.css';
import '../components/cartelle/Cartella.css';
import { useState } from 'react';

const useTabellone = (): [Map<number, boolean>, number, () => void] => {
    const tabelloneMap = new Map<number, boolean>();
    Array.from({ length: 90 }).map((_, i) => tabelloneMap.set(i + 1, false));
    const [pick, setPick] = useState(0);

    const [tabellone, setTabellone] = useState(tabelloneMap);

    const handlePick = () => {
        const itemsLeft = Array.from(tabellone.entries()).filter(item => !item[1]);
        if (itemsLeft.length !== 0) {
            const index = Math.floor((Math.random() * itemsLeft.length));
            const num = itemsLeft[index][0];

            console.log(itemsLeft);

            setTabellone(prev => {
                const newTabellone = new Map(prev);
                newTabellone.set(num, !newTabellone.get(num))
                return newTabellone;
            })
            setPick(num);
        }
    }

    return [tabellone, pick, handlePick];
}

export const Tabellone = () => {
    const [tabellone, pick, handlePick] = useTabellone();

    return (
        <div className='container'>
            <div className='tabellone'>
                {Array.from(tabellone.entries()).map(([key, selected]) =>
                    <div
                        className={selected ? 'casella selezionata' : 'casella'}
                    >
                        {key}
                    </div>
                )}
            </div>
            <div className='pescaContainer'>
                <button className='pesca' onClick={handlePick}>
                    <p className={pick !== 0 ? 'pescato' : undefined}>{pick === 0 ? 'Clicca per pescare un numero' : pick}</p>
                </button>
            </div>
        </div >
    )
}