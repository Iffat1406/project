import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

const CustomNavbar = () => {
  const [showPlans, setShowPlans] = useState(false);

  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo3.png"
            alt="CableNet Logo"
            style={{ maxHeight: "70%", width: "60px", marginRight: "10px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Center links with spacing */}
          <Nav className="mx-auto d-flex align-items-center" style={{ gap: "20px" }}>
            <Nav.Link href="/">Home</Nav.Link>

            {/* Plans with hover dropdown */}
            <style>{`
              #plans-dropdown::after {
                display: none !important; /* hides the arrow */
              }
            `}</style>

            <NavDropdown
              title={<span>Plans</span>}
              id="plans-dropdown"
              show={showPlans}
              onMouseEnter={() => setShowPlans(true)}
              onMouseLeave={() => setShowPlans(false)}
            >
              <NavDropdown.Item href="/plans/internet">Internet Plans</NavDropdown.Item>
              <NavDropdown.Item href="/plans/cable">Cable Plans</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* Red Get Started button */}
            <Button
              as="a"
              href="/contact"
              style={{
                backgroundColor: "#FF124F",
                borderColor: "#FF124F",
                color: "#fff",
              }}
            >
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
