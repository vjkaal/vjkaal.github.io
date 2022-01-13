import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./css/style.css";

export const Header = () => {
  return (
    <div>
      <header>
        <Navbar
          expand="lg"
          collapseOnSelect={true}
          className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid"
        >
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/MyWorks">
                  My Works
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} to="/about">
                  About Me
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          <Nav className="justify-content-end dont-show-in-lg-mode">
            <Navbar.Text>Vanshaj Kaushal</Navbar.Text>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
};
