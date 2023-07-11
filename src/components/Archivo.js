import { Link } from 'react-router-dom';
import Card from './Card';
import Hero from './Hero';
import '../styles/layout/archive.scss';
//import { useEffect } from "react";

const Archivo = () => {
  const archivedProjects = [
    {
      id: 1,
      name: 'Elegante Workspace',
      slogan: 'Diseños Exclusivos',
      technologies: '',
      demo: '',
      repo: '',
      description: '',
      autor: 'Irene',
      job: '',
      image: '',
      photo: '',
    },
    {
      id: 2,
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      description: '',
      autor: 'Aida',
      job: '',
      image: '',
      photo: '',
    },
    {
      id: 3,
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      description: '',
      autor: 'Celia',
      job: '',
      image: '',
      photo: '',
    },
    {
      id: 4,
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      description: '',
      autor: 'Andrea',
      job: '',
      image: '',
      photo: '',
    },
  ];

  /*
    const [archivedProjects,setArchivedProjects] = useState([]);

    useEffect(() => {
        fetch('???')
            .then()
            .then(data => {
                setArchivedProjects(data);
            })
    }, [])
*/
  const cardsList = () => {
    return archivedProjects.map((eachProject) => (
      <li key={eachProject.id} className="projectList__card">
        <Card eachProject={eachProject} />
      </li>
    ));
  };

  return (
    <div>
      <Hero></Hero>
      <div className="archive">
        <ul className="projectList">{cardsList()}</ul>
        <Link className="projectList__btn" to="/Inicio">
          VOLVER
        </Link>
      </div>
    </div>
  );
};
export default Archivo;
