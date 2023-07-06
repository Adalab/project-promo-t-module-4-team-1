import '../styles/layout/hero.scss';
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <section className="main__hero">
      <h1 className="main__hero--title">Programadores Junior</h1>
      <p className="main__hero--subtitle">
        El evento en el que conocer a las nuevas promesas de la programación web
      </p>
      <Link to="/Archivo"><button className="main__hero--button">VER PROYECTOS</button></Link>
    </section>
  );
};
export default Hero;
