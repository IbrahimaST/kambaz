import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Nav variant="pills" id="wd-toc">
      <NavItem>
        <NavLink to="/Labs/Lab1" as={Link} active={pathname.includes("Lab1")}>
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Labs/Lab2" as={Link} active={pathname.includes("Lab2")}>
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Labs/Lab3" as={Link} active={pathname.includes("Lab3")}>
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Labs/Lab4" as={Link} active={pathname.includes("Lab4")}>
          Lab 4
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
