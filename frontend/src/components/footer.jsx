// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <img src='/images/logp.png' alt='LOGO' />
            <h5>CableNet</h5>
            <p>Your trusted cable and internet service provider. Fast, reliable, and affordable.</p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/support" className="text-light">Support</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@cablenet.com</p>
            <p>Phone: +1-800-123-4567</p>
            <p>Address: 123 Fiber St, Net City, IN 12345</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} CableNet. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
