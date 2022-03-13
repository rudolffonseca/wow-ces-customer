import { FC } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

interface Props {
  path: string;
  linkText: string;
}

export const NavbarItem: FC<Props> = ({ path, linkText }) => {
  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to={path} className="nav_link--text">
        {linkText}
      </Nav.Link>
    </Nav.Item>
  );
};
