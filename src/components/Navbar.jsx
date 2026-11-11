import { NavLink } from "react-router"

export const Navbar = () => {
  return (
    <nav className="navbar">

        <NavLink to="/" className="nav-link"> Inicio</NavLink>
        <NavLink to="/Proyectos"classname="nav-link">Proyectos</NavLink>
        <NavLink to="/Contacto" className="nav-link">Contacto</NavLink>
    </nav>


  )
}
