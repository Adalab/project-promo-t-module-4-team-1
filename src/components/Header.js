import '../styles/layout/header.scss';
import logo from '../images/logo-adalab.png';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <header className="header">
      <p className="header__text">
        <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
        Programadores Junior
      </p>
      <img className="header__logo" src={logo} alt="logo Adalab" />
    </header>
  );
};
export default Header;
