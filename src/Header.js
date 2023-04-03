import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="/" className="navbar-brand">
        E-CART
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/add" className="nav-link">
            Add Product
          </Link>
          <Link to="/update" className="nav-link">
            Update Product
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
