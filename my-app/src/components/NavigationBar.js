import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../App.css';

const NavigationBar = ({ clearSuccessMessage }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
    clearSuccessMessage?.(); // Clear success message if provided
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#/" className="website-brand d-flex align-items-center" onClick={handleNavClick}>
          <img
            src="/favicon.ico"
            alt="Logo"
            className="favicon-icon"
          />
          <span className="ms-2">My Website</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/experiences" active={location.pathname === "/experiences"} onClick={handleNavClick}>Experiences</Nav.Link>
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Nav.Link href="#/projects" active={location.pathname === "/projects"} onClick={handleNavClick}>Projects</Nav.Link>
              {dropdownOpen && (
                <div className="dropdown-menu show" style={{ backgroundColor: 'white', color: 'black' }}>
                  <Nav.Link href="#/projects/campus" className="dropdown-item" style={{ color: 'black' }} onClick={handleNavClick}>CampUs</Nav.Link>
                  <Nav.Link href="#/projects/thegame" className="dropdown-item" style={{ color: 'black' }} onClick={handleNavClick}>The Game</Nav.Link>
                  <Nav.Link href="#/projects/meteoroids" className="dropdown-item" style={{ color: 'black' }} onClick={handleNavClick}>Meteoroids</Nav.Link>
                </div>
              )}
            </div>
            <Nav.Link href="#/contact" active={location.pathname === "/contact"} onClick={handleNavClick}>Contact Me</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ji-im-a100041b0/" target="_blank" rel="noopener noreferrer" className="linkedin-link" onClick={handleNavClick}>LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
