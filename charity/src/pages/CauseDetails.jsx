import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function CauseDetails() {
  const { id } = useParams(); 
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>Cause Details for {id}</h2>
          <p>Here are the details about the cause...</p>
          <Link to="/donate">
            <Button variant="primary">Donate Now</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CauseDetails;
