import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item">
        <Link to="/" className="nav-link text-white">
          Pogoda w Twoim mieście
        </Link>
      </li>
      <li>
        <Link to="/capitals" className="nav-link text-white">
          Pogoda w Europie
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
