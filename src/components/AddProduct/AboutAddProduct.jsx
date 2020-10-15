import React from "react";
import { Container } from "react-bootstrap";
function AboutAddProduct() {
  return (
    <Container className="text-center pt-5">
      <h4 className="display-6">About AddProduct</h4>
      <hr className="mb-4 bg-warning" />
      <div className="small lead mb-5">
        <p>You can add a new product here</p>
        <p>
          Please fill all the details honestly and make sure that all the fields
          are necessary.
        </p>
        <p>You can view the added product in the product list</p>
      </div>
    </Container>
  );
}

export default AboutAddProduct;
