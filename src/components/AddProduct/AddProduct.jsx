import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import AboutAddProduct from "./AboutAddProduct";
import AddProductForm from "./AddProductForm";
function AddProduct() {
  return (
    <Container fluid className="mt-4 mb-5">
      <Row>
        <Col sm={2} className="border-right border-warning bg-light">
          <AboutAddProduct />
        </Col>
        <Col sm={10}>
          <Container>
            <Row>
              <Col>
                <h5 className="display-6 mt-4 ml-4">Add New Product</h5>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <Container
                  className="bg-light shadow p-5"
                  style={{ minHeight: "70vh", background: "#ede8e8" }}
                >
                  <AddProductForm />
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(AddProduct);
