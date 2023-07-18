import '../styles/layout/preview.scss';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cover from '../images/proyectimg.jpg';
import user from '../images/profilegirld.png';

const Preview = ({ data, handleReset}) => {
  return (
    <section className="preview">
      <img className="preview__image" src={data.photo || cover} alt="#" />
      <section className="preview__autor">
        <section className="preview__autor--infoproject project">
          <p className="project__subtitle">Personal Project Card</p>
          <hr className="project__line" />
          <h2 className="project__title">
            {data.name || 'Elegante Workspace'}{' '}
          </h2>
          <p className="project__slogan">
            {data.slogan || 'Diseños Exclusivos'}
          </p>
          <p className="project__desc">
            {data.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod ullamcorper orci, eget ultricies tellus auctor ac. Duis dignissim lorem eget imperdiet pharetra. Proin consectetur purus non nisi tristique eleifend. Nam sed gravida est.'}
          </p>
          <section className="project__technologies">
            <p className="project__technologies--text">
              {data.technologies || 'React JS, MongoDB'}
            </p>

            <div className="project__technologies--icon">
              <a
                href={data.demo}
                rel="noreferrer"
                target="_blank"
                className="icon"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <a
                href={data.repo}
                rel="noreferrer"
                target="_blank"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </section>
        </section>
        <section className="preview__autor--infoautor infoAutor">
          <img className="infoAutor__image" src={data.image || user} alt="#" />
          <p className="infoAutor__job">{data.job || 'Full Stack Developer'}</p>
          <p className="infoAutor__name">{data.autor || 'Emmelie Björklund'}</p>
        </section>
      </section>
      <div className='reset'>
        <button className='resetBtn' onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Preview;
