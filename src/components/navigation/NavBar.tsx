import { Link } from "react-router";
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navBar">
            <Link to='/'>Home</Link>
        </div>
    )
}