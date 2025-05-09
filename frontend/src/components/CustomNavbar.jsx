import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      {/* Brand with logo image */}
      <Navbar.Brand href="/">
  <img
    src="/images/logo.png"
    alt="CableNet Logo"
    style={{
      maxHeight: '70%',     // ✅ controls logo height without stretching Navbar
      width: '60px',
      marginRight: '10px'
    }}
  />
  Radha Cable and Internet
</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        {/* Move links to the right */}
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/plans">Plans</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/support">Support</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/login" className="text-info">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};


export default CustomNavbar;
