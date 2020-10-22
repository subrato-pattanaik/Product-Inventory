import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function SignupForm() {
  const schema = yup.object().shape({
    email: yup.string().required("*Email is mandatory"),
    password: yup.string().required("*Password is mandatory"),
    firstname: yup
      .string()
      .required("*First Name is mandatory")
      .matches(/^[A-Za-z]*$/, "Enter charater only")
      .max(20, "First name exceeds its length to 20"),
    lastname: yup
      .string()
      .required("*last Name is mandatory")
      .matches(/^[A-Za-z]*$/, "Enter charater only")
      .max(20, "First name exceeds its length to 20"),
    mobileno: yup
      .string()
      .required("*Mobile No is mandatory")
      .matches(/^[0-9]*$/, "Enter Number only")
      .max(10, "Must contain 10 number")
      .min(10, "Must contain 10 number"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);

    axios.post("http://localhost:4000/users", formData);

    navigation.push({
      pathname: "/Login",
      state: { pass: "pass" },
    });
  };

  let navigation = useHistory();
  return (
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Form.Row>
        <Form.Group as={Col} className="mr-2">
          <Form.Label>
            Email<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-pill"
            type="email"
            placeholder="Enter email"
            name="email"
            ref={register}
          />
          {errors.email && (
            <div className="small lead text-danger mb-2">
              {errors.email.message}
            </div>
          )}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>
            Password<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-pill"
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
          {errors.password && (
            <div className="small lead text-danger  mb-2">
              {errors.password.message}
            </div>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} className="mr-2">
          <Form.Label>
            First Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-pill"
            placeholder="Enter First Name"
            name="firstname"
            ref={register}
          />
          {errors.firstname && (
            <div className="small lead text-danger  mb-2">
              {errors.firstname.message}
            </div>
          )}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>
            Last Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-pill"
            placeholder="Enter Last Name"
            name="lastname"
            ref={register}
          />
          {errors.lastname && (
            <div className="small lead text-danger  mb-2">
              {errors.lastname.message}
            </div>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row className="mb-4">
        <Form.Group as={Col} className="mr-2">
          <Form.Label>Location</Form.Label>
          <Form.Control
            className="rounded-pill"
            placeholder="Enter Location"
            name="location"
            ref={register}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>
            Mobile No<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-pill"
            placeholder="Mobile No."
            name="mobileno"
            ref={register}
          />
          {errors.mobileno && (
            <div className="small lead text-danger  mb-2">
              {errors.mobileno.message}
            </div>
          )}
        </Form.Group>
      </Form.Row>

      <Button
        variant="warning"
        type="submit"
        className="d-block text-white w-100 rounded-pill "
        //onClick={() => navigation.push("/Login")}
      >
        Submit
      </Button>
    </Form>
  );
}

export default withRouter(SignupForm);
