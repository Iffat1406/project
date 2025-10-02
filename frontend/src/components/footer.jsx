// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            {/* <img src='/images/logp.png' alt='LOGO' /> */}
            <h4>About Us</h4>
            <p>Your trusted cable and internet service provider. Fast, reliable, and affordable.</p>

              {/* Social media icons */}
            <div>
              <h6>Follow Us On</h6>
              <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaFacebookF size={22} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaTwitter size={22} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaInstagram size={22} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <h4> Links</h4>
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
