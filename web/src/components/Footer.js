import '../styles/layout/footer.scss';
import logo from '../images/logo-adalab.png';
const Footer = () => {
  return (
    <footer className="main">
      <a
        href="https://adalab.es/bootcamp-programacion/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="header__logo" src={logo} alt="logo Adalab" />
      </a>
    </footer>
  );
};

export default Footer;
