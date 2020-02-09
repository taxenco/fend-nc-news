import React from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  NavDropdown,
  Button
} from "react-bootstrap";
import styles from "../../CSS/NavBar.module.css";

import { FiLogIn } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

export default function NavBar({ changingUser }) {
  return (
    <nav class={styles.nav}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>NC-NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="dark" href="/articles">
              {<FaHome />}
            </Button>
            <DropdownButton
              alignRight
              title="Topics"
              id="dropdown-split-basic"
              variant="dark"
              size="md"
              drop="down"
              hoover="true"
            >
              <Dropdown.Item href="/articles/football">Football</Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="2" href="/articles/coding">
                Coding
              </Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item eventKey="3" href="/articles/cooking">
                Cooking
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav>
            <DropdownButton
              alignRight
              title={<FiLogIn />}
              id="dropdown-menu-align-right"
              variant="dark"
              size="md"
              drop="down"
              onSelect={event => changingUser(event)}
            >
              <Dropdown.Item eventKey="jessjelly">jessjelly </Dropdown.Item>
              <NavDropdown.Divider />

              <Dropdown.Item eventKey="tickle122">tickle122 </Dropdown.Item>
              <NavDropdown.Divider />

              <Dropdown.Item eventKey="grumpy19">grumpy19</Dropdown.Item>
              <NavDropdown.Divider />

              <Dropdown.Item eventKey="happyamy2016">
                happyamy2016
              </Dropdown.Item>
              <NavDropdown.Divider />

              <Dropdown.Item eventKey="cooljmessy">cooljmessy</Dropdown.Item>
              <NavDropdown.Divider />

              <Dropdown.Item eventKey="weegembump">weegembump</Dropdown.Item>
              <NavDropdown.Divider />
              <p>
                {" "}
                <strong> Default :</strong> jessjelly{" "}
              </p>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
