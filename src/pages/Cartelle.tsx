import { Cartella } from "../components/cartelle/Cartella"
import './Cartelle.css';

const cartella1 = [
    0, 2, 0, 17, 0, 0, 24, 25, 0, 31, 0, 36, 41, 43, 44, 51, 0, 52, 0, 0, 63, 0, 70, 0, 0, 81, 85];

export const Cartelle = () => {
    return (
        <div className='cartelle'>
            <Cartella numbers={cartella1}></Cartella>
        </div>
    )
}