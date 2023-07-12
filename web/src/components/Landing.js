import { Link } from 'react-router-dom';
import '../styles/layout/landing.scss';
import programadoresJ from '../images/programadoresJU.png';
const Landing = () => {
  return (
    <div className="landingPage">
      <img className='landingImg' src={programadoresJ}></img>
      <p className="slogan">
        Las nuevas promesas de la programación web se esconden detrás de estos
        increíbles proyectos
      </p>
      <div className='questions'>
        <p className="question1">
          Has empezado hace poco en el mundo de la programación web y te
          gustaría dar a conocer tu trabajo? Participa subiendo un resumen de
          alguno de tus mejores proyectos!!
        </p>
        <p className="question2">
          Estás interesado en conocer a las nuevas promesas y su trabajo? Visita
          nuestra galeria de proyectos y escoge tu favorito!!
        </p>
      </div>
      <div className="landingPage__buttons">
        <Link to="/Inicio">
          <button className='landingPage__buttons--btn'>CREAR PROYECTOS</button>
        </Link>
        <Link to="/Archivo">
          <button className='landingPage__buttons--btn'>VER PROYECTOS</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
