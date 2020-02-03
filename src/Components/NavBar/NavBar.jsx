import React from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  NavDropdown,
  Button
} from "react-bootstrap";

export default function NavBar() {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>NC-NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="dark" href="/">
              Home
            </Button>
            <DropdownButton
              alignRight
              title="Topics"
              id="dropdown-split-basic"
              variant="dark"
              size="md"
              drop="down"
              hoover
            >
              <Dropdown.Item eventKey="1" href="/football">
                Football
              </Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="2" href="/coding">
                Coding
              </Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="3" href="/cooking">
                Cooking
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav>
            <DropdownButton
              alignRight
              title="Log In"
              id="dropdown-menu-align-right"
              variant="dark"
              size="md"
              drop="down"
            >
              <Dropdown.Item eventKey="1">User 1</Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="2">User 2</Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="3">User 3</Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="4">User 4</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}