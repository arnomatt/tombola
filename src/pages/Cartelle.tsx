import { Cartella } from "../components/cartelle/Cartella"
import { generateCard } from "../components/utils/generateCard";
import './Cartelle.css';

export const Cartelle = () => {
    return (
        <div className='cartelle'>
            <Cartella numbers={generateCard()}></Cartella>
        </div>
    )
}