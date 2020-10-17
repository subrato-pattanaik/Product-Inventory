import React from "react";
import { Container } from "react-bootstrap";

function AboutProductList() {
  return (
    <Container className="pt-3">
      <div className="text-center">
        <h4 className="mb-n2 display-6">About Product List</h4>
        <hr className="mb-4 bg-warning" />
        <div className="small lead mb-4">
          <p>Here you can find the list of products in the inventory</p>
          <p>You can also view all of the product individually.</p>
          <p>You can edit, view and delete the product easily</p>
        </div>
      </div>
      <div></div>
    </Container>
  );
}

export default AboutProductList;
