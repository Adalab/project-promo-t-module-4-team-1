import { Link } from "react-router-dom";
import '../styles/layout/archive.scss'
const Archivo =()=> {
    return(
        <div className="archive">
        <p>Lo sentimos, todavía no hay ningún proyecto presentado</p>
        <Link to="/Inicio">Volver</Link>
        </div>
    )
}
export default Archivo; 