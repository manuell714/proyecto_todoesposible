export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="/">MiApp</a>
      <div>
        <a className="nav-link d-inline text-white" href="#inicio">Inicio</a>
        <a className="nav-link d-inline text-white" href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}
