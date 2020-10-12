import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import login from "../../images/image2.jpg";
import SignupForm from "./SignupForm";

function Signup() {
  const image = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${login})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "89vh",
  };
  return (
    <Container fluid={true} className="p-0">
      <Row noGutters>
        <Col lg={6} md={6} xs={12}>
          <Container
            className="d-flex bg-light align-items-center"
            style={{ minHeight: "89vh" }}
          >
            <Row className="mx-auto p-5">
              <Col md={12} xs={12}>
                <h3 className="display-4 text-warning text-center font-weight-bold mt-n5 mb-2">
                  Sign Up
                </h3>

                <SignupForm />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6} md={6} xs={12} style={image}></Col>
      </Row>
    </Container>
  );
}

export default withRouter(Signup);
