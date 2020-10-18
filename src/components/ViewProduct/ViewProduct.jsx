import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ViewProductForm from "./ViewProductForm";
import { withRouter } from "react-router-dom";
import AboutViewProduct from "./AboutViewProduct";

function ViewProduct() {
  return (
    <Container fluid className="mt-4 mb-5">
      <Row>
        <Col sm={2} className="border-right bg-light">
          <AboutViewProduct />
        </Col>
        <Col sm={10}>
          <Container>
            <Row className="mt-2">
              <Col sm={4}>
                <h3 className="display-5 ml-4">View Product</h3>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <ViewProductForm />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(ViewProduct);
