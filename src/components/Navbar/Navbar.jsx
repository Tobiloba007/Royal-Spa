// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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
        <Navbar key={expand} bg="white" expand={expand} className="mb-0 py-4">
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
                  {/* <div className="n-nav"> */}
                  <Link className='n-link' to="/">HOME</Link>
                  <Link className='n-link' to="/about">ABOUT</Link>
                  <Link className='n-link' to="/pictures">GALLERY</Link>
                  <Link className='n-link' to="/contact">CONTACT US</Link>
                  {/* </div> */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>

                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffCanvasExample;


// import React from 'react'
// import './navbar.css'
// import {Link} from 'react-router-dom'
// import {motion} from 'framer-motion';

// const Navbar = () => {
//   return (
//     <motion.div className='n-wrapper'
//     initial={{y : -250, opacity: 0}}
//     animate={{y: 0, opacity: 1}}
//     transition={{delay: 0.2, type : "tween"}}
//     >
//        <div className="n-logo">ROYAL SKINCARE SPA</div>
//        <div className="n-nav">
//        <Link className='n-link' to="/">HOME</Link>
//        <Link className='n-link' to="/about">ABOUT</Link>
//        <Link className='n-link' to="/pictures">GALLERY</Link>
//        <Link className='n-link' to="/contact">CONTACT US</Link>
//        </div>
//     </motion.div>
   
//   )
// }

// export default Navbar