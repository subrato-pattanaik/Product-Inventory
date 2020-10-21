import React, { useContext } from "react";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import login from "../../images/image1.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";

const schema = yup.object().shape({
  email: yup.string().required("*Email is required for login"),
  password: yup.string().required("*Please enter password"),
});

function Login() {
  const { user, setUser } = useContext(UserContextAPI);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const image = {
    backgroundImage: `url(${login})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "89vh",
  };

  let navigation = useHistory(); //for navigation
  let location = useLocation();

  const checkExistence = (serverUsers, formData) => {
    const user = serverUsers.find((user) => user.email === formData.email);
    if (user) return user;
  };

  const onSubmit = async (formData, event) => {
    const users = await axios
      .get("http://localhost:4000/users")
      .then((response) => checkExistence(response.data, formData));

    if (!users)
      alert(
        "Account for this E-Mail doesn't exit !! \nCreate a new account \nOR \nYou might have typos in E-Mail"
      );
    else {
      if (users.password === formData.password) {
        event.target.reset();
        setUser(users.id);
        navigation.push("/productList");
      } else alert("Wrong password");
    }
  };

  return (
    <>
      {!!user ? (
        <>{navigation.push("/")}</>
      ) : (
        <Container fluid={true} className="p-0">
          <Row noGutters>
            <Col lg={6} md={6} xs={12} style={image}></Col>
            <Col lg={6} md={6} xs={12}>
              <Container className="d-flex login bg-light align-items-center">
                <Row className="mx-auto justify-content-center">
                  <Col md={10} xs={10}>
                    {!!location?.state?.pass && (
                      <Alert variant="success">
                        <Alert.Heading>
                          Successfully Registered !!!
                        </Alert.Heading>
                      </Alert>
                    )}
                    {!!location?.state?.addProduct && (
                      <Alert variant="danger">
                        <Alert.Heading>
                          Login First then add the product
                        </Alert.Heading>
                      </Alert>
                    )}
                    {!!location?.state?.editProduct && (
                      <Alert variant="danger">
                        <Alert.Heading>
                          Login First then edit the product
                        </Alert.Heading>
                      </Alert>
                    )}
                    {!!location?.state?.deleteproduct && (
                      <Alert variant="danger">
                        <Alert.Heading>
                          Login First then delete the product
                        </Alert.Heading>
                      </Alert>
                    )}

                    <h3 className="display-4 text-warning text-center font-weight-bold">
                      PI Login
                    </h3>
                    <p className="text-muted text-center mb-4">
                      Lets do shopping from here with best deals
                    </p>
                    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group controlId="formBasicEmail" className="mb-4">
                        <Form.Label className="small lead">
                          Email address
                        </Form.Label>
                        <Form.Control
                          className="rounded-pill"
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          ref={register}
                        />
                      </Form.Group>
                      {errors.email && (
                        <div className="small lead text-danger mt-n3 mb-4">
                          {errors.email.message}
                        </div>
                      )}
                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-4"
                      >
                        <Form.Label className="small lead">Password</Form.Label>
                        <Form.Control
                          className="rounded-pill"
                          type="password"
                          name="password"
                          placeholder="Password"
                          ref={register}
                        />
                        {errors.password && (
                          <div className="small lead text-danger mb-n1 mb-4">
                            {errors.password.message}
                          </div>
                        )}
                      </Form.Group>

                      <Button
                        variant="warning"
                        type="submit"
                        className="btn-block text-white border-0 rounded-pill mb-4"
                      >
                        Login here
                      </Button>
                    </Form>
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

export default withRouter(Login);
