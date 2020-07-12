import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar
      color="primary"
      expand="md"
      className="py-4"
      variant="dark"
      bg="primary"
    >
      <Navbar.Brand href="/">BLACK OWNED</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar" className="justify-content-end">
        <Nav navbar>
          <Nav.Link className="pr-5" href="/components/">
            Categories
          </Nav.Link>
          <Button variant="secondary">Submit a Business</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
