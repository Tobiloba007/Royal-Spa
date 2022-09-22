import './navbar.css'
// import royalLogo from '../../resources/royal-logo.png'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'

function OffCanvasExample() {
  return (
    <div className='n-wrapper'>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="py-1 nav-con">
          <Container fluid>
            <Navbar.Brand className='n-nav-p'>ROYAL TREAT SKINCARE & SPA</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                ROYAL TREAT SKINCARE & SPA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" n-nav-links justify-content-center  flex-grow-1 ps-0">
                  <Link className='n-link' to="/">HOME</Link>
                  <Link className='n-link' to="/about">ABOUT</Link>
                  <Link className='n-link' to="/pictures">GALLERY</Link>
                  <Link className='n-link' to="/contacts">CONTACT US</Link>
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffCanvasExample;
