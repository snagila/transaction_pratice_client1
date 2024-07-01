import { useState } from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({});

  return (
    <Container>
      <Row className="d-flex align-items-center justiy-content-center vh-100">
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Welcome Back!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Finance</p>
          </Stack>
        </Col>

        {/* Login Form */}
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Login</h1>
            {/* Login Form */}
            <Form>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form>
            <p>Don&apos;t have account?</p>
            <Link to="/signup">Sign up</Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
