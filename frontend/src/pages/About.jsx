// src/components/About.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaRocket,
  FaTv,
  FaHandsHelping,
  FaGlobe,
  FaUsers,
  FaRegSmile,
} from "react-icons/fa";
import "../css/About.css";


const About = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold text-primary">About Us</h2>
            <p className="text-center text-muted">
              Welcome to <strong>Radha Internet and Cable</strong> – your trusted
              partner in fast, reliable, and affordable connectivity.
            </p>
          </Col>
        </Row>

        {/* Company Story */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img
              src="/images/company-story.jpg"
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3>Our Story</h3>
            <p>
              Established with a vision to connect our community, Radha Internet
              and Cable has been providing high-speed internet and affordable
              cable TV services to households and businesses. From humble
              beginnings, we have grown to become a trusted name in digital
              connectivity.
            </p>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="mb-5">
          <Col md={6}>
            <h4>Our Mission</h4>
            <p>
              To deliver seamless connectivity through internet and cable
              services that empower families, students, and businesses to thrive
              in today’s digital world.
            </p>
          </Col>
          <Col md={6}>
            <h4>Our Vision</h4>
            <p>
              To be recognized as the most reliable and customer-focused
              internet and cable provider in our region, expanding access to
              everyone.
            </p>
          </Col>
        </Row>

   {/* Why Choose Us */}
<div className="container my-5">
  <h3 className="text-center mb-4">Why Choose Us?</h3>
  <div className="row text-center justify-content-center">
    
    {/* High-Speed Internet */}
    <div className="col-md-3 mb-4">
      <div className="info-card shadow-sm p-4 rounded">
        <div className="icon-circle mb-3 text-primary">
          <FaRocket size={35} />
        </div>
        <h5 className="fw-bold">High-Speed Internet</h5>
        <p className="text-muted">Perfect for streaming, gaming, and remote work.</p>
      </div>
    </div>

    {/* Affordable Cable */}
    <div className="col-md-3 mb-4">
      <div className="info-card shadow-sm p-4 rounded">
        <div className="icon-circle mb-3 text-primary">
          <FaTv size={35} />
        </div>
        <h5 className="fw-bold">Affordable Cable</h5>
        <p className="text-muted">Entertainment for the whole family at fair prices.</p>
      </div>
    </div>

    {/* Customer First */}
    <div className="col-md-3 mb-4">
      <div className="info-card shadow-sm p-4 rounded">
        <div className="icon-circle mb-3 text-primary">
          <FaHandsHelping size={35} />
        </div>
        <h5 className="fw-bold">Customer First</h5>
        <p className="text-muted">24/7 support to keep you connected without worries.</p>
      </div>
    </div>

    {/* Trusted Service */}
    <div className="col-md-3 mb-4">
      <div className="info-card shadow-sm p-4 rounded">
        <div className="icon-circle mb-3 text-primary">
          <FaGlobe size={35} />
        </div>
        <h5 className="fw-bold">Trusted Service</h5>
        <p className="text-muted">Reliable connectivity with 99% uptime.</p>
      </div>
    </div>

  </div>
</div>


        {/* Testimonials */}
        <Row className="mb-5 text-center">
          <h3 className="mb-4">What Our Customers Say</h3>
          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <FaRegSmile size={30} className="text-success mb-2" />
              <p>
                “The internet speed is amazing and the support team is always
                available. Best service provider in town!”
              </p>
              <h6>- Priya K.</h6>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <FaRegSmile size={30} className="text-success mb-2" />
              <p>
                “Affordable packages and reliable connection. My family enjoys
                both internet and cable without interruptions.”
              </p>
              <h6>- Rajesh P.</h6>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <FaRegSmile size={30} className="text-success mb-2" />
              <p>
                “They really care about customers. Installation was quick and
                hassle-free.”
              </p>
              <h6>- Neha S.</h6>
            </Card>
          </Col>
        </Row>

        {/* Contact CTA */}
        <Row className="text-center">
          <Col>
            <h3>Get Connected With Us</h3>
            <p>
              Ready to experience seamless connectivity? Reach out to{" "}
              <strong>Radha Internet and Cable</strong> today.
            </p>
            <p className="fw-bold">📞 Call us: +91 98765 43210</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
