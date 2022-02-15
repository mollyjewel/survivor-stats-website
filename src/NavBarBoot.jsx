import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarBoot() {
  return (
    <Navbar bg="light" expand="lg"  fixed="top">
      <Container>
        <Navbar.Brand href="/"><img
          alt="torch logo"
          src="/imgs/logo.svg"
          width="50"
          height="50"
        />Survivor Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/seasons">Seasons</Nav.Link>
            <Nav.Link href="#casting">Casting</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoot;
