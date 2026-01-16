import { useParams } from "react-router";
import { Cartella } from "../components/cartelle/Cartella"
import { generateCard } from "../components/utils/generateCard";
import './Cartelle.css';

export const Cartelle = () => {
    const { num } = useParams();

    return (
        <div className='cartelle'>
            {num ? Array.from({ length: parseInt(num) }).map((_, i) => (
                <Cartella key={i} numbers={generateCard()}></Cartella>
            )) : <Cartella numbers={generateCard()}></Cartella>}
        </div>
    )
}