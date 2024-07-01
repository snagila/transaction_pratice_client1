import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Link to="/login">
              <Button variant="primary"> Login</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/signup">
              <Button variant="danger"> Signup</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
