import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { GROUPS, LinkList} from "../Routing";

const Navbars = () => {

  return (
    <header className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">React Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
         
            <Nav className="ms-auto">
              {LinkList(GROUPS.HEADER)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

export default Navbars;
