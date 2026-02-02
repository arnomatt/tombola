import { NavLink, useLocation } from "react-router";
import './NavBar.css';
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

export const NavBar = () => {
    const location = useLocation();
    const modalContext = useContext(ModalContext);
    const isCartelle = location.pathname.includes("cartelle");

    const handleClick = () => {
        if (!modalContext?.isModalVisible) {
            modalContext?.setModalVisibility(true);
        }
    }

    return (
        <div className="navBar">
            <NavLink className={({ isActive }) =>
                isActive ? "active" : "inactive"
            } to='/'>Home</NavLink>
            <button className={
                isCartelle ? "active" : "inactive"
            } onClick={handleClick}>Cartelle</button>
            <NavLink className={({ isActive }) =>
                isActive ? "active" : "inactive"
            } to='/tabellone'>Tabellone</NavLink>
        </div>
    )
}