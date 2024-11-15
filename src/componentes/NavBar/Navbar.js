import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './EstilosNavbar.css'; // Asegúrate de que esta ruta sea correcta si tienes estilos personalizados

function NavBar() {
  return (
    <Navbar expand="lg" className="Nav">
      <Container>
        <Navbar.Brand as={Link} to="/" className="pNav">
          <h1>La Barberia</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Usar ms-auto para mover los enlaces al lado derecho */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="pNav">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/cortes" className="pNav">
              Cortes
            </Nav.Link>
            <Nav.Link as={Link} to="/turnos" className="pNav">
              Turnos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
