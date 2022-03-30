import {Link } from "react-router-dom";
const Menu = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/" className="nav-link text-white">Pogoda w Twoim mieście</Link>
            </li>
            <li>
            <Link to="/capitals" className="nav-link text-white">Pogoda na świecie</Link>
            </li>
        </ul>
    )
}

export default Menu