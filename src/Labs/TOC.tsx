import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink to="/Labs" as={Link}>
          Labs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Labs/Lab1" as={Link}>
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Labs/Lab2" as={Link} active>
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Labs/Lab3" as={Link}>
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Kambaz" as={Link}>
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://www.github.com/IbrahimaST" target="_blank">
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
