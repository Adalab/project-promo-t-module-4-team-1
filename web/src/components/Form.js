import '../styles/layout/form.scss';
import GetAvatar from './GetAvatar';
const Form = ({
  handleInputs,
  data,
  serverResponse,
  handleClickCreateCard,
  handleChangeForm,
}) => {
  const handleImage = (userImage) => {
    handleChangeForm('image', userImage);
  };
  const handlePhoto = (userImage) => {
    handleChangeForm('photo', userImage);
  };
  return (
    <section className="form">
      <h2 className="form__title">Información</h2>
      <section className="form__askinfo">
        <p className="form__askinfo--subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="form__askinfo--line" />
      </section>
      <fieldset className="form__project">
        <input
          className="form__project--input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          onInput={handleInputs}
          value={data.name}
        />
        <input
          className="form__project--input"
          type="text"
          name="slogan"
          id="slogan"
          onInput={handleInputs}
          placeholder="Slogan"
          value={data.slogan}
        />
        <input
          className="form__project--input"
          type="text"
          name="repo"
          id="repo"
          placeholder="Repo"
          onInput={handleInputs}
          value={data.repo}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          onInput={handleInputs}
          value={data.demo}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          onInput={handleInputs}
          value={data.technologies}
        />
        <textarea
          className="form__project--textarea"
          type="text"
          placeholder="Descripción"
          name="description"
          id="description"
          onInput={handleInputs}
          value={data.description}
        ></textarea>
      </fieldset>
      <section className="form__askinfo">
        <p className="form__askinfo--subtitle">Cuéntanos sobre ti</p>
        <hr className="form__askinfo--line" />
      </section>
      <fieldset className="form__autor">
        <input
          className="form__autor--input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="autor"
          onInput={handleInputs}
          value={data.autor}
        />
        <input
          className="form__autor--input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          onInput={handleInputs}
          value={data.job}
        />
      </fieldset>
      <section className="buttons-img">
        <GetAvatar
          text="Subir foto de proyecto"
          avatar={data.photo}
          updateAvatar={handlePhoto}
        />
        <GetAvatar
          text="Subir foto de autora"
          avatar={data.image}
          updateAvatar={handleImage}
        />
      </section>
      <section className="form__buttons-img">
        <button
          className="form__buttons-img--btnlarge"
          onClick={handleClickCreateCard}
        >
          Crear Tarjeta
        </button>
      </section>
      {serverResponse.success === true && (
        <section className="form__card">
          <span className=""> La tarjeta ha sido creada: </span>
          <a href={serverResponse.cardURL} target="_blank" rel="noreferrer">
            {serverResponse.cardURL}
          </a>
        </section>
      )}
      {serverResponse.success === false && (
        <section className="form__card">
          <span className=""> Faltan campos por completar </span>
        </section>
      )}
    </section>
  );
};

export default Form;
