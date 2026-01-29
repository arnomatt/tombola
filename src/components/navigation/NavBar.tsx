import { NavLink } from "react-router";
import './NavBar.css';
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

export const NavBar = () => {
    const modalContext = useContext(ModalContext);

    return (
        <div className="navBar">
            <NavLink to='/'>Home</NavLink>
            <button onClick={() => modalContext?.setModalVisibility(true)}>Cartelle</button>
            <NavLink to='/tabellone'>Tabellone</NavLink>
        </div>
    )
}