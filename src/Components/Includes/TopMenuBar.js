import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from '../../Images/logo.png'

const TopMenubar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" id="navbar">
        <Container>
          <Navbar.Brand href="/"><Image src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">Invitation</Nav.Link>
              <Nav.Link href="#courses">Inauguration</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#pricing" className="btn btn-primary m-1 rounded">Click here to Register</Nav.Link> */}
              <Nav.Link href="https://www.facebook.com/RudravadhutMathJamkhandiMumbai/" className="btn btn-primary text-white m-1">Like Facebook Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenubar;
