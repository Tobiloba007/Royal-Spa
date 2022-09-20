import './navbar.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'

function OffCanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-0 py-4 nav-con">
          <Container fluid>
            <Navbar.Brand href="#">ROYAL SKINCARE AND SPA</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ROYAL SKINCARE AND SPA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className='n-link' to="/">HOME</Link>
                  <Link className='n-link' to="/about">ABOUT</Link>
                  <Link className='n-link' to="/pictures">GALLERY</Link>
                  <Link className='n-link' to="/contact">CONTACT US</Link>
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffCanvasExample;
