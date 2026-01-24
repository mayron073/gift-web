import { Link } from "react-router-dom"
import "../styles/navBar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/momentos">Momentos</Link>
      <Link to="/escritos">Escritos</Link>
      <Link to="/estudio">Estudios</Link>
      <Link to="/checklist">Checklist</Link>
      <Link to="/citas">Citas biblicas</Link>
    </nav>
  )
}
