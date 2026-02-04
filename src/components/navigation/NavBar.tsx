import { NavLink } from "react-router";
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navBar">
            <NavLink className={({ isActive }) =>
                isActive ? "active" : "inactive"
            } to='/'>Home</NavLink>
        </div>
    )
}