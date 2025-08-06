import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand with logo image */}
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            alt="CableNet Logo"
            style={{ maxHeight: '70%', width: '60px', marginRight: '10px' }}
          />
          Radha Cable and Internet
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Move links to the right */}
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>

          <style>{`
            .nav-item.dropdown .dropdown-toggle::after {
              display: none;
            }

            .nav-item.dropdown:hover .dropdown-menu {
              display: block;
            }

      `}</style>
            {/* Plans with hover-dropdown */}
            <NavDropdown title="Plans" id="plans-dropdown" className="dropdown">
              <NavDropdown.Item href="/plans/internet">Internet Plans</NavDropdown.Item>
              <NavDropdown.Item href="/plans/cable">Cable Plans</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/services">Services</Nav.Link>
            
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

             {/* Get Started Button */}
            <Nav.Link href="/services">
              <Button variant="primary">Get Started</Button>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
