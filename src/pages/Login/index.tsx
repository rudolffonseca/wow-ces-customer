import React, { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authentication } from "../../store/auth/actionCreators";
import { hasToken } from "../../store/auth/selectors";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token: boolean = useSelector(hasToken);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div className="signup__container">
      <Form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authentication(email, password));
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            id="email"
            className="border--rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <br />
        <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            id="password"
            type="password"
            required={true}
            className="border--rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            value="submit"
            className="border--rounded"
          >
            Submit!
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
