import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../App.css';

const NavigationBar = ({ clearSuccessMessage }) => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#/" className="website-brand">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/experiences" active={location.hash === "#/experiences"}>Experiences</Nav.Link>
            <Nav.Link href="#/projects" active={location.hash === "#/projects"}>Projects</Nav.Link>
            <Nav.Link href="#/contact" active={location.hash === "#/contact"} onClick={clearSuccessMessage}>Contact Me</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ji-im-a100041b0/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
