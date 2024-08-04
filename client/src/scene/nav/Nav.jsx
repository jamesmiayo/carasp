import './nav.css';
import { FaCar } from 'react-icons/fa';

const Nav = () => {
  return (
    <div>
      <nav className="navbar container">
        <div className="navbar-brand">
          <FaCar size={40} />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
