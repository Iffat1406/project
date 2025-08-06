import React from "react";
import { Container, Row, Col, Card, Form, Button, Accordion } from "react-bootstrap";

const SupportPage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Support Center</h2>
      <p className="text-center text-muted mb-5">
        We're here to help! Choose an option below or submit a support ticket.
      </p>

      {/* Support Options */}
      <Row className="mb-5">
        <Col md={4}>
          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <i className="bi bi-telephone-fill fs-1 text-primary mb-3" />
              <Card.Title>Call Us</Card.Title>
              <Card.Text>
                +91-9876543210 <br />
                9 AM – 9 PM (All Days)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <i className="bi bi-chat-dots-fill fs-1 text-success mb-3" />
              <Card.Title>Chat Support</Card.Title>
              <Card.Text>
                Available on WhatsApp <br />
                Click below to chat.
              </Card.Text>
              <Button variant="success" href="https://wa.me/919876543210" target="_blank">
                Chat Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <i className="bi bi-envelope-fill fs-1 text-danger mb-3" />
              <Card.Title>Email Us</Card.Title>
              <Card.Text>
                support@radhacable.in <br />
                Response within 24 hrs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}
      <h4 className="mb-3">Frequently Asked Questions</h4>
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>My internet is not working. What should I do?</Accordion.Header>
          <Accordion.Body>
            Try restarting your router. If the problem continues, please raise a support ticket or call us.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I upgrade my plan?</Accordion.Header>
          <Accordion.Body>
            Please contact our support team via phone or WhatsApp to upgrade your plan.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>TV channels are not showing. What to do?</Accordion.Header>
          <Accordion.Body>
            Try rescanning channels on your set-top box. If unresolved, reach out to us via call or chat.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Support Ticket Form */}
      <h4 className="mb-3">Raise a Support Ticket</h4>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="your@email.com" required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="+91XXXXXXXXXX" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formSubject">
              <Form.Label>Issue Type</Form.Label>
              <Form.Select required>
                <option>-- Select Issue --</option>
                <option>Internet Not Working</option>
                <option>Cable Issue</option>
                <option>Billing Problem</option>
                <option>Plan Upgrade</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Describe your issue..." required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Ticket
        </Button>
      </Form>
    </Container>
  );
};

export default SupportPage;
