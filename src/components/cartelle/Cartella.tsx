import './Cartella.css';

interface CartellaProps {
    numbers: number[];
}

export const Cartella = (props: CartellaProps) => {
    const { numbers } = props;

    return (
        <div className="cartella">
            {numbers.map(number => <div className="casella" key={number}>{number}</div>)}
        </div>
    )
}