import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import AboutProductList from "./AboutProductList";
import ProductListTable from "./ProductListTable";

function ProductList() {
  let navigation = useHistory();
  const [allSelected, setAllSelected] = useState(false);

  return (
    <Container fluid className="mt-4 mb-5">
      <Row>
        <Col sm={2} className="border-right bg-light">
          <AboutProductList />
        </Col>
        <Col sm={10}>
          <Container>
            <Row className="mt-2">
              <Col sm={4}>
                <h3 className="display-5 ml-4">Product List</h3>
              </Col>

              <Col sm={8} className="d-flex justify-content-end">
                <Button
                  variant="warning"
                  className=" "
                  onClick={() => navigation.push("./addProduct")}
                >
                  Add Product
                </Button>
              </Col>
            </Row>
            <hr />
            {allSelected && (
              <Alert variant="danger">
                <Alert.Heading className="text-center small">
                  All conversations on this page are selected.
                </Alert.Heading>
              </Alert>
            )}
            <Row>
              <Col>
                <ProductListTable
                  allSelected={allSelected}
                  setAllSelected={setAllSelected}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(ProductList);
