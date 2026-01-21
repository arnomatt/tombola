import { useState } from 'react';
import './Cartella.css';

interface CartellaProps {
    id: number;
    numbers: number[][]; // 3 rows x 9 columns, 0 means empty cell
}

/**
 * A custom hook to handle the logic of each card
 * In a card, each row will have 5 numbers and each column will have at least 1 number
 * 
 * @param numbers 
 * @returns [cartella, handleNumberClick] which are the state and the click handler to update it
 */
const useCartella = (numbers: number[]): [Map<string, boolean>, (number: number) => void] => {
    const validNumbers = numbers.filter(number => number !== 0);
    const cartellaMap = new Map<string, boolean>();

    for (let i = 0; i < validNumbers.length; i++) {
        cartellaMap.set(validNumbers[i].toString(), false);
    }

    const [cartella, setCartella] = useState(cartellaMap);

    const handleNumberClick = (number: number) => {
        const key = number.toString();
        setCartella(prevCartella => {
            const newCartella = new Map(prevCartella);
            newCartella.set(key, !newCartella.get(key));
            return newCartella;
        })
    }

    return [cartella, handleNumberClick];
}

export const Cartella = (props: CartellaProps) => {
    const { numbers, id } = props;
    const [cartella, handleNumberClick] = useCartella([...numbers[0], ...numbers[1], ...numbers[2]]);

    return (
        <div>
            <div className="title">Cartella no. {id}</div>
            <div className="cartella">
                {numbers.map((row, idr) => row.map((number, idx) =>
                    number ?
                        <button className={cartella.get(number.toString()) ? "casella selezionata" : "casella"}
                            key={`${idr}` + `${idx}`}
                            onClick={() => handleNumberClick(number)}>
                            {number}
                        </button> :
                        <div className="casella vuota" key={idx}></div>))}
            </div>
        </div>
    )
}