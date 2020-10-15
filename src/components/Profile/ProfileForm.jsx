import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";
import axios from "axios";

function ProfileForm() {
  const { user } = useContext(UserContextAPI);
  const [editUser, setEditUser] = useState({
    id: 0,
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    location: "",
    mobileno: "",
  });

  const { register, errors, reset } = useForm({
    defaultValues: editUser,
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${user}`).then((res) => {
      setEditUser(res.data);
      reset(res.data);
    });
  }, [user, reset]);

  return (
    <Form autoComplete="off">
      <Form.Row>
        <Form.Group as={Col} className="mr-4">
          <Form.Label>
            Email<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={register}
            disabled="true"
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
            type="password"
            name="password"
            ref={register}
            disabled="true"
          />
          {errors.password && (
            <div className="small lead text-danger  mb-2">
              {errors.password.message}
            </div>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} className="mr-4">
          <Form.Label>
            First Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="firstname" ref={register} disabled="true" />
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
          <Form.Control name="lastname" ref={register} disabled="true" />
          {errors.lastname && (
            <div className="small lead text-danger  mb-2">
              {errors.lastname.message}
            </div>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row className="mb-3">
        <Form.Group as={Col} className="mr-4">
          <Form.Label>Location</Form.Label>
          <Form.Control name="location" ref={register} disabled="true" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>
            Mobile No<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="mobileno" ref={register} disabled="true" />
          {errors.mobileno && (
            <div className="small lead text-danger  mb-2">
              {errors.mobileno.message}
            </div>
          )}
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default withRouter(ProfileForm);
