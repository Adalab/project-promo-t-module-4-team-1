import programación from '../images/programacion.jpeg';
/*import cover2 from '../images/cover_2.jpeg';*/
import {Route, Routes} from 'react-router-dom';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import sendToApi from '../services/api';
import ls from '../services/LocalStorage';
import { useEffect, useState } from 'react';
import '../styles/core/reset.scss';
import '../styles/core/mixins.scss';
import '../styles/layout/page.scss';
import Landing from './Landing';
import Header from './Header';
import Preview from './Preview';
import Hero from './Hero';
import Form from './Form';
import Footer from './Footer';
import GetAvatar from './GetAvatar';
import Archivo from './Archivo';

function App() {
  const [serverResponse, setServerResponse] = useState({});
  const [data, setData] = useState(
    ls.get('objData', {
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
  );

  useEffect(() => {
    ls.set('objData', data);
  }, [data]);
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    sendToApi(data).then((result) => {
      setServerResponse(result);
      console.log(result.success);
    });
  };
  const handleInputs = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };
  const handleChangeForm = (propName, value) => {
    const cloneData = { ...data, [propName]: value };
    setData(cloneData);
  };
  const handleReset = (ev) =>{
    ev.preventDefault();
    setData ({
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
  }
  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Landing/>
            }/>
          <Route
            path="/Inicio" 
            element={
              <>
                <Hero></Hero>
                <div className="main__section">
                  <Preview data={data} handleReset={handleReset}></Preview>
                  <Form
                    handleInputs={handleInputs}
                    data={data}
                    handleClickCreateCard={handleClickCreateCard}
                    serverResponse={serverResponse}
                    handleChangeForm={handleChangeForm}
                  ></Form>
                </div>
              </>
            }/>
            <Route
            path='/Archivo'
            element={
              <Archivo/>
            }/>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
