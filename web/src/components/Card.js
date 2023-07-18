import user from '../images/profilegirld.png';
import '../styles/layout/preview.scss';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({eachProject}) => {

    

return (
    <>
        <section className="preview__autor">
            <section className="preview__autor--infoproject project">
              <p className="project__subtitle">Personal Project Card</p>
              <hr className="project__line" />
              <h2 className="project__title">
                {eachProject.name || 'Elegante Workspace'}{' '}
              </h2>
              <p className="project__slogan">
                {eachProject.slogan || 'Diseños Exclusivos'}
              </p>
              <p className="project__desc">
                {eachProject.description ||
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod ullamcorper orci, eget ultricies tellus auctor ac. Duis dignissim lorem eget imperdiet pharetra. Proin consectetur purus non nisi tristique eleifend. Nam sed gravida est.'}
              </p>
              <section className="project__technologies">
                <p className="project__technologies--text">
                  {eachProject.technologies || 'React JS, MongoDB'}
                </p>
                <div className="project__technologies--icon">
                  <a
                    href={eachProject.demo}
                    rel="noreferrer"
                    target="_blank"
                    className="icon"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                  <a
                    href={eachProject.repo}
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
              <img className="infoAutor__image" src={eachProject.image} alt="#" />
              <p className="infoAutor__job">{eachProject.job}</p>
              <p className="infoAutor__name">{eachProject.autor}</p>
            </section>
          </section>
    </>
);
}

export default Card;