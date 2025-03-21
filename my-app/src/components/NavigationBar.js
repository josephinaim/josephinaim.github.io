import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../App.scss';

const NavigationBar = ({ clearSuccessMessage }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false); 
    clearSuccessMessage?.();
  };

  return (
    <Navbar variant={scrolled ? "dark" : "light"} expand="lg" sticky="top" expanded={expanded} className={scrolled ? "scrolled-navbar" : ""}>
      <Container className={`home-container ${scrolled ? "home-scrolled-container" : ""}`}>
        <Navbar.Brand href="#/" className="website-brand d-flex align-items-center" onClick={handleNavClick}>
          <img
            src={scrolled ? "/white-favicon.ico" : "/favicon.ico"}
            alt="Logo"
            className="favicon-icon"
          />
          <span className="ms-2">Ji Im</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/experiences" active={location.pathname === "/experiences"} onClick={handleNavClick}>Experiences</Nav.Link>
            <Nav.Link href="#/projects" active={location.pathname === "/projects"} onClick={handleNavClick}>Projects</Nav.Link>
            <Nav.Link href="#/contact" active={location.pathname === "/contact"} onClick={handleNavClick}>Contact Me</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ji-im-a100041b0/" target="_blank" rel="noopener noreferrer" className="linkedin-link" onClick={handleNavClick}>LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
