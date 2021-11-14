import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light fw-bold">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src="https://i.ibb.co/5TL68Fq/logo-black.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              Explore
            </Nav.Link>

            {user?.email ? (
              <Nav>
                <Nav.Link
                  className=" btn-nav p-2 me-2"
                  as={Link}
                  to="/dashboard"
                >
                  Dashboard
                </Nav.Link>

                <button onClick={logOut} on className="btn-nav me-2">
                  Logout
                </button>
              </Nav>
            ) : (
              <Nav.Link className="btn-nav p-2" as={Link} to="/login#login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text className="text-primary ">
              <p className="text-black"> {user?.displayName}</p>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
