import React from "react";
import { Container } from "react-bootstrap";

function AboutViewProduct() {
  return (
    <Container className="pt-3">
      <div className="text-center">
        <h4 className="mb-n2 display-6">About View Product</h4>
        <hr className="mb-4 bg-warning" />
        <div className="small lead mb-4">
          <p>Here you can View the individual products in the inventory</p>
        </div>
      </div>
    </Container>
  );
}

export default AboutViewProduct;
