import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form as Forms,
  InputGroup,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if (!reg.test(String(e.target.value).toLowerCase())) {
      setEmailError('Inccorect address');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPass(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 15) {
      setPasswordError('Inccorect password');
    } else {
      setPasswordError('');
    }
  };

  const submitData = () => {
    handleClick(email, pass);
  };

  return (
    <Container>
      <Row>
        <Col>
          <form className="form">
            <InputGroup className="mt-3">
              <Forms.Control
                placeholder="Email"
                aria-label="Recipient's username"
                value={email}
                onChange={(e) => emailHandler(e)}
              />
            </InputGroup>
            <div className="error">{mailError}</div>
            <InputGroup className="mt-3">
              <Forms.Control
                placeholder="Password"
                type="password"
                aria-label="Recipient's username"
                value={pass}
                onChange={(e) => passwordHandler(e)}
              />
            </InputGroup>
            <div className="error">{passwordError}</div>
            <div className="button__container">
              <Button variant="outline-success" onClick={submitData}>
                {title}
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
