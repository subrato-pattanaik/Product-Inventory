import React, { useContext } from "react";
import { Navbar, Button } from "react-bootstrap";
import { withRouter, useHistory } from "react-router-dom";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";
import "./Header.css";
import Navlinks from "./Navlinks";
function Header() {
  let navigation = useHistory();

  const { user, setUser } = useContext(UserContextAPI);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow"
    >
      <Navbar.Brand className="navbrand">
        <span className="brandfont">PI</span> Product Inventory
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navlinks />
        {!!user ? (
          <>
            <Button
              variant="outline-warning"
              onClick={() => navigation.push("/Profile")}
            >
              Profile
            </Button>
            &emsp;
            <Button variant="outline-warning" onClick={() => setUser(false)}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline-warning"
              onClick={() => navigation.push("/Login")}
            >
              Log in
            </Button>
            &emsp;
            <Button
              variant="outline-warning"
              onClick={() => navigation.push("/Signup")}
            >
              Sign up
            </Button>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(Header);
