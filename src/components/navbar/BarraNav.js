import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

function BarraNav() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link to={'/'}>Home</Nav.Link>

            <Nav.Link href="https://www.youtube.com/watch?v=lYBUbBu4W08">No me clickees no funciono</Nav.Link>
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item to={`/categoria/fritura`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                Frituras</NavDropdown.Item>
              <NavDropdown.Item to={`/categoria/no-fritura`}  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                No frituras </NavDropdown.Item>
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      
      </Container>
      <CartWidget className="m-5" /> 
    </Navbar>
  );
}

export default BarraNav;