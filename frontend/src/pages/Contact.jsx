import React, {useState} from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import "../css/Contact.css"


const Contact = () => {
  // Local state to manage form inputs
  const [formData, setFormData] = useState({ 
    firstname: "", 
    lastname: "",
    email: "", 
    website: "", 
    subject: "", 
    message: "" 
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted!", formData);
    alert("Thank you for contacting us!");
    setFormData({ firstname: "", lastname: "", email: "", website: "", subject: "", message: "" });
  };

  return (
    <>

          {/* Cards Section */}
          <div className="contact-info-section container mt-5">
          <div className="row text-center justify-content-center">
            {/* Visit Our Place */}
            <div className="col-md-4 mb-4">
              <div className="info-card shadow-sm p-4 rounded">
                <div className="icon-circle mb-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h5 className="fw-bold">Visit our place</h5>
                <p className="text-muted mb-1">New Dinkar Co Operative Housing Society, New Girgaonkar Wadi, Sitladevi Temple Road, Mahim</p>
                <p className="text-muted">Mumbai</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-md-4 mb-4">
              <div className="info-card shadow-sm p-4 rounded">
                <div className="icon-circle mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <h5 className="fw-bold">Contact us</h5>
                <p className="text-muted mb-1">radhacablenet1@gmail.com</p>
                <p className="text-muted">+(91) 8369108915</p>
              </div>
            </div>

            {/* Office Time */}
            <div className="col-md-4 mb-4">
              <div className="info-card shadow-sm p-4 rounded">
                <div className="icon-circle mb-3">
                  <i className="bi bi-alarm-fill"></i>
                </div>
                <h5 className="fw-bold">Office time</h5>
                <p className="text-muted mb-1">Five days 10am To 8pm</p>
                <p className="text-muted">Friday is closed</p>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Form */}
          <div className="contact-form p-4">
            <h2>Send your message</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                    className="mb-3"
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="mb-3"
                  />
                </Col>
                
              </Row>

              <Row className="mb-3">
              <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="mb-3"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your subject"
                    className="mb-3"
                    required
                  />
                </Col>
              </Row>

              <Form.Group controlId="contactMessage" className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                />
              </Form.Group>

              <Button variant="danger" type="submit">
                SEND Message
              </Button>
            </Form>
          </div>


     {/* Company Location Section */}
      <div className="contact-location p-4 mt-4">
        <h2>Company Location</h2>
        <iframe
          src="https://www.google.com/maps?q=Taj+Mahal,Agra,India&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          ariaHidden="false"
          tabIndex="0">
        </iframe>
      </div>
  </>
    
  );
}

export default Contact
