import { useParams } from "react-router";
import { Cartella } from "../components/cartelle/Cartella"
import { buildCartella } from "../components/utils/generaCartella";
import './Cartelle.css';

export const Cartelle = () => {
    const { num } = useParams();

    return (
        <div className='cartelle'>
            {num ? Array.from({ length: parseInt(num) }).map((_, i) => (
                <Cartella key={i} numbers={buildCartella()}></Cartella>
            )) : <Cartella numbers={buildCartella()}></Cartella>}
        </div>
    )
}