import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";
import EditProductForm from "./EditProductForm";
import { useHistory, withRouter } from "react-router-dom";
import AboutEditProduct from "./AboutEditProduct";
function EditProduct() {
  const { user } = useContext(UserContextAPI);
  let navigation = useHistory();

  return (
    <>
      {!user ? (
        <>{navigation.push("/Login")}</>
      ) : (
        <Container fluid className="mt-4 mb-5">
          <Row>
            <Col sm={2} className="border-right bg-light">
              <AboutEditProduct />
            </Col>
            <Col sm={10}>
              <Container>
                <Row className="mt-2">
                  <Col sm={4}>
                    <h3 className="display-5 ml-4">Edit Product</h3>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <EditProductForm />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default withRouter(EditProduct);
