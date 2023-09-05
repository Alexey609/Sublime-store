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
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <Forms.Control
                placeholder="Password"
                type="password"
                aria-label="Recipient's username"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </InputGroup>
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
