import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AlertBox } from "../../components/AlertBox/AlertBox";
import { Country } from "../../models/Country";
import { registration } from "../../store/auth/actionCreators";
import { getMessage } from "../../store/auth/selectors";
import { queryCountries } from "../../store/queries/actionCreators";
import { getCountries } from "../../store/queries/selectors";
import "./style.css";

export const SignUp: FC = () => {
  const dispatch = useDispatch();
  const countries: Country[] = useSelector(getCountries);
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const message: string = useSelector(getMessage);

  useEffect(() => {
    dispatch(queryCountries());
  }, [dispatch]);

  const messageBox = message ? (
    message === "You're signed up!" ? (
      <AlertBox headText="Success!" bodyText={message} isGood={true} />
    ) : (
      <AlertBox headText="Failed!" bodyText={message} isGood={false} />
    )
  ) : (
    <></>
  );

  // FIXME: couldn't find a type for the event.
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (!country || password !== confirmPassword) {
      console.log("something wrong");
    } else {
      dispatch(
        registration({
          id: "",
          name,
          country,
          email,
          password,
        })
      );
    }
  };

  return !countries ? (
    <></>
  ) : (
    <div>
      {messageBox}
      <div className="signup__container">
        <Form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              className="border--rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Country: </Form.Label>
            <Form.Select
              className="border--rounded"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option disabled hidden value="">
                Select a country
              </option>
              {countries
                .sort((a, b) => (a.name >= b.name ? 1 : -1))
                .map((country: Country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <br />
          <Form.Group>
            <Form.Label>e-mail: </Form.Label>
            <Form.Control
              type="email"
              required={true}
              className="border--rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <br />
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              required={true}
              className="border--rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            <br />
            <Form.Label>Confirm Password: </Form.Label>
            <Form.Control
              type="password"
              required={true}
              className="border--rounded"
              style={
                password !== confirmPassword
                  ? { background: "#f29b9b" }
                  : { background: "white" }
              }
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group>
            <Button variant="primary" type="submit" className="border--rounded">
              Submit!
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
