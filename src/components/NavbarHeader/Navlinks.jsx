import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

function Navlinks() {
  return (
    <Nav className="mr-auto">
      <Nav.Link
        as={NavLink}
        to="/"
        activeClassName="active"
        activeStyle={{ color: "orange" }}
        exact={true}
      >
        About
      </Nav.Link>
      <NavDropdown title="Inventory">
        <NavDropdown.Item
          as={NavLink}
          to="/productList"
          activeClassName="active"
          activeStyle={{ color: "orange" }}
        >
          Products List
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/addProduct"
          activeClassName="active"
          activeStyle={{ color: "orange" }}
        >
          Add Product
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default withRouter(Navlinks);
