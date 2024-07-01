import { useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const [loginForm, setLoginForm] = useState(initialState);
  const { email, password } = loginForm;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
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
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email:</Form.Label>
                <Form.Control
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnchange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnchange}
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Login
              </Button>
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
