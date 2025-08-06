import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const plans = [
  {
    speed: "50mbps",
    durations: [
      { period: "90D", price: "₹1,500" },
      { period: "180D", price: "₹3,000" },
      { period: "360D", price: "₹5,000" },
    ],
  },
  {
    speed: "70mbps",
    durations: [
      { period: "90D", price: "₹1,950" },
      { period: "180D", price: "₹3,900" },
      { period: "360D", price: "₹6,500" },
    ],
  },
  {
    speed: "100mbps",
    durations: [
      { period: "90D", price: "₹2,550" },
      { period: "180D", price: "₹5,100" },
      { period: "360D", price: "₹8,500" },
    ],
    popular: true,
  },
  {
    speed: "150mbps",
    durations: [
      { period: "90D", price: "₹3,000" },
      { period: "180D", price: "₹6,000" },
      { period: "360D", price: "₹10,000" },
    ],
  },
  {
    speed: "200mbps",
    durations: [
      { period: "90D", price: "₹3,900" },
      { period: "180D", price: "₹7,800" },
      { period: "360D", price: "₹13,000" },
    ],
  },
  {
    speed: "300mbps",
    durations: [
      { period: "90D", price: "₹4,500" },
      { period: "180D", price: "₹9,000" },
      { period: "360D", price: "₹15,000" },
    ],
    popular: true,
  },
  {
    speed: "500mbps",
    durations: [
      { period: "90D", price: "₹6,000" },
      { period: "180D", price: "₹12,000" },
      { period: "360D", price: "₹20,000" },
    ],
  },
];

const InternetPlans = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Radha Internet Plans</h2>
      <Row className="g-4 justify-content-center">
        {plans.map((plan, idx) => (
          <Col key={idx} md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                {plan.popular && (
                  <Badge bg="danger" className="mb-2">
                    MOST POPULAR
                  </Badge>
                )}
                <h4 className="text-primary fw-bold">Up to {plan.speed}</h4>
                <div className="text-muted mb-3">Wi-Fi • Unlimited</div>
                <ul className="list-unstyled mb-3">
                  {plan.durations.map((d, i) => (
                    <li key={i}>
                      <strong>{d.period}</strong> — {d.price}
                    </li>
                  ))}
                </ul>
                <div className="text-muted mb-3 small">
                  No hidden fees • Quick activation
                </div>
                <Button variant="warning">BUY NOW</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InternetPlans;
