import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Users List with Axios</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: "none", color: "#e4e6eb" }}>
            <i class="fa-solid fa-house"></i>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
