import { useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
      <Row className="d-flex align-items-center justiy-content-center vh-100">
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Join Our App!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Fincance</p>
          </Stack>
        </Col>

        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Sign Up</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Full Name</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Enter your full name"
                  type="string"
                  required
                  value={name}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  value={email}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  name="password"
                  placeholder="Enter your password"
                  type="string"
                  required
                  value={password}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                <Form.Control
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                SignUp
              </Button>
            </Form>
            <p>Already have account?</p>
            <Link to="/login">Login</Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
