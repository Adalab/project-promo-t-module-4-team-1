import '../styles/layout/hero.scss';
import { Link , useLocation} from 'react-router-dom';
const Hero = () => {
  const { pathname } = useLocation();
  return (
    <section className="main__hero">
      <h1 className="main__hero--title">Programadoras Junior</h1>
      <p className="main__hero--subtitle">
        El evento en el que conocer a las nuevas promesas de la programación web
      </p>
      {pathname !== '/Archivo' && (
      <Link to="/Archivo">
        <button className="main__hero--button">VER PROYECTOS</button>
      </Link>
      )}
    </section>
  );
};
export default Hero;
