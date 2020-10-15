import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, useHistory } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";

function Profile() {
  const { user } = useContext(UserContextAPI);
  let navigation = useHistory();
  return (
    <>
      {!user ? (
        <>{navigation.push("/Login")}</>
      ) : (
        <Container
          fluid={true}
          className="p-0"
          style={{ minHeight: "89.1vh", background: "#454441" }}
        >
          <Row noGutters>
            <Col>
              <Container className="bg-light my-5">
                <Row className="mx-auto">
                  <Col>
                    <Row>
                      <Col>
                        <h1 className="display-5  px-4 py-2 text-warning text-left font-weight-bold">
                          View your Profile
                        </h1>
                      </Col>
                    </Row>
                    <div className="text-muted border border-warning rounded p-5 mb-5 mx-3">
                      <ProfileForm />
                    </div>
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

export default withRouter(Profile);
