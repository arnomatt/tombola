import { useParams } from "react-router";
import { Cartella } from "../components/cartelle/Cartella"
import { buildCartella } from "../components/utils/generaCartella";
import './Cartelle.css';

export const Cartelle = () => {
    const { num } = useParams();

    console.log("Rendering cartelle");

    return (
        <div className='cartelle'>
            {num ? Array.from({ length: parseInt(num) }).map((_, i) => (
                <Cartella key={i} numbers={buildCartella()} id={i + 1}></Cartella>
            )) : <Cartella numbers={buildCartella()} id={1}></Cartella>}
        </div>
    )
}