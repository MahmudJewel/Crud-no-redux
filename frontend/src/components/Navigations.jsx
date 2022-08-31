import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
// import { connect } from "react-redux";

import "../asset/navigations.css";
// import { logout } from "../actions/root";

const Navigation = ({ logout, isAuthenticated }) => {

  return (
    <div className="mb-3">
      <Navbar className="shadow nav-color">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              Blog
            </Link>{" "}
          </Navbar.Brand>

          <Nav className="">
            <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/"
                className="nav-link text-dark"
              >
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/create"
                className="nav-link text-dark"
              >
                Create Post
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
