import React from "react";
import { Container } from "react-bootstrap";

function AboutEditProduct() {
  return (
    <Container className="pt-3">
      <div className="text-center">
        <h4 className="mb-n2 display-6">About Product List</h4>
        <hr className="mb-4 bg-warning" />
        <div className="small lead mb-4">
          <p>Here you can edit the products in the inventory</p>
          <p>You can view all the products in the product List</p>
        </div>
      </div>
    </Container>
  );
}

export default AboutEditProduct;
