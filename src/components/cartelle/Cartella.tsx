import './Cartella.css';

interface CartellaProps {
    numbers: number[]; // use 0 to represent an empty cell
}

export const Cartella = (props: CartellaProps) => {
    const { numbers } = props;

    return (
        <div className="cartella">
            {numbers.map(number => number !== 0 ? <div className="casella" key={number}>{number}</div> : <div className="casella"></div>)}
        </div>
    )
}