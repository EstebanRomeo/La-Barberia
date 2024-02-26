import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EstilosNavbar from "./EstilosNavbar.css"
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="Nav">
      <Container>
        <Navbar.Brand href="#home" className="pNav"><h1>La Barberia</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="pNav">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/cortes" className="pNav">
              Cortes
            </Nav.Link>
            <NavDropdown title="Nuestros peluqueros" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/peluquero1" className="pNav">
              Peluquero 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/peluquero2" className="pNav">
              Peluquero 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/peluquero3" className="pNav">
              Peluquero 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="pNav">
              Mas info
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="pNav">Turnos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;