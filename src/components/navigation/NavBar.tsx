import { NavLink } from "react-router";
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navBar">
            <NavLink to='/'>Home</NavLink>
        </div>
    )
}