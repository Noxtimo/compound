import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/About" className="nav-link">
          <em>About</em>
        </Link>
      </li>
      <li>
        <Link to="/Faq" className="nav-link">
          FAQ
        </Link>
      </li>
      <li>
        <Link to="/Contact" className="nav-link">
          Contact Us
        </Link>
      </li>
    </div>
  );
};

export default Header;
