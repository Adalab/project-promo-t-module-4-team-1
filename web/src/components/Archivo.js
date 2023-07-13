import { Link } from 'react-router-dom';
import Card from './Card';
import Hero from './Hero';
import '../styles/layout/archive.scss';
import { useEffect, useState } from "react";
import dataApi from '../services/api';
const Archivo = () => {
  const [archivedProjects,setArchivedProjects] = useState([]);
  useEffect(() => {
    dataApi.getAllCardsApi()
    .then(dataJson => {
        setArchivedProjects(dataJson);
    })
  }, [])
  console.log(archivedProjects);

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
        CREAR PROYECTO
        </Link>
      </div>
    </div>
  );
};
export default Archivo;
