import React, { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" expand="md">
      <Container fluid>
        <NavbarBrand href="/">BLACK OWNED</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem className="pr-5">
              <NavLink href="/components/">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Button}>Submit a Business</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
