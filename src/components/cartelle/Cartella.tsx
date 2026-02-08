import { useState } from 'react';
import './Cartella.css';

interface CartellaProps {
    id: number;
    numbers: number[][]; // 3 rows x 9 columns, 0 means empty cell
}

const scores = new Map([[2, 'Ambo'], [3, 'Terno'], [4, 'Quaterna'], [5, 'Cinquina'], [15, 'Tombola']]);

/**
 * A custom hook to handle the logic of each card
 * In a card, each row will have 5 numbers and each column will have at least 1 number
 * 
 * @param numbers 
 * @returns [cartella, handleNumberClick] which are the state and the click handler to update it
 */
const useCartella = (numbers: number[]): [number, Map<string, boolean>, (number: number) => void] => {
    const validNumbers = numbers.filter(number => number !== 0);
    const cartellaMap = new Map<string, boolean>();

    for (let i = 0; i < validNumbers.length; i++) {
        cartellaMap.set(validNumbers[i].toString(), false);
    }

    const [cartella, setCartella] = useState(cartellaMap);
    const [score, setScore] = useState(0);

    const handleNumberClick = (number: number) => {
        const key = number.toString();
        setCartella(prevCartella => {
            const newCartella = new Map(prevCartella);
            newCartella.set(key, !newCartella.get(key));
            const array = Array.from(newCartella.entries());
            const row1Sum = array.slice(0, 5).filter(i => i[1]).length;
            const row2Sum = array.slice(5, 10).filter(i => i[1]).length;
            const row3Sum = array.slice(10, 15).filter(i => i[1]).length;
            const totalSum = row1Sum + row2Sum + row3Sum;
            if (totalSum === 15) {
                setScore(15);
            } else {
                const currentScore = Math.max(row1Sum, row2Sum, row3Sum);
                setScore(currentScore);
            }
            return newCartella;
        })
    }

    return [score, cartella, handleNumberClick];
}

export const Cartella = (props: CartellaProps) => {
    const { numbers, id } = props;
    const [score, cartella, handleNumberClick] = useCartella([...numbers[0], ...numbers[1], ...numbers[2]]);

    return (
        <div>
            <div className="title">Cartella #{id} - Score: {scores.get(score) || '-'}</div>
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