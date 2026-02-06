import { NavLink, useLocation } from "react-router";
import './NavBar.css';

export const NavBar = () => {
    const location = useLocation();

    const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (location.pathname.includes('cartelle') || location.pathname.includes('tabellone')) {
            const confirmed = window.confirm('Torna alla Home? I progressi di gioco saranno persi');
            if (!confirmed) {
                event.preventDefault();
            }
        }
    };

    return (
        <div className="navBar">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                }
                to='/tombola/'
                onClick={handleHomeClick}
            >
                Home
            </NavLink>
        </div>
    );
}