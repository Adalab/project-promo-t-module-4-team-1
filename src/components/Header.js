import '../styles/layout/header.scss';
import logo from '../images/logo-adalab.png';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link">
        <p className="header__text">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          Programadoras Junior
        </p>
      </Link>
      <a
        href="https://adalab.es/bootcamp-programacion/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="header__logo" src={logo} alt="logo Adalab" />
      </a>
    </header>
  );
};
export default Header;
