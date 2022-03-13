import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { hasToken } from "../../store/auth/selectors";
import { LoggedIn } from "./LoggedIn";
import { LoggedOut } from "./LoggedOut";
import "./navbar.css";

export const NavBar: FC = () => {
  const token: boolean = useSelector(hasToken);
  const changeButton: JSX.Element = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">WoW Customer Exp Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {token ? <Nav.Link href="/dashboard">Dashboard</Nav.Link> : <></>}
          </Nav>
          {changeButton}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
