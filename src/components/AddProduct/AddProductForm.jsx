import React, { useState, useContext } from "react";
import { withRouter, useHistory, Prompt } from "react-router-dom";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";
import { Col, Button, Form } from "react-bootstrap";

import axios from "axios";

function AddProductForm() {
  const { user } = useContext(UserContextAPI);
  const [validated, setValidated] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const { register, handleSubmit } = useForm({});

  let navigation = useHistory();
  const onSubmit = (formData) => {
    if (user && validated) {
      formData.select = false;
      axios.post("http://localhost:4000/products", formData);
      setIsDirty(false);
      navigation.push({
        pathname: "/productList",
        state: { added: "pass" },
      });
    } else {
      if (validated) {
        setIsDirty(false);
        navigation.push({
          pathname: "/Login",
          state: { addProduct: "pass" },
        });
      }
      setValidated(true);
    }
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} className="mr-5">
            <Form.Label column>Product Name</Form.Label>
            <Form.Control
              name="productName"
              placeholder="Enter product Name"
              required
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid product name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label column>Product Description</Form.Label>
            <Form.Control
              name="productDesc"
              placeholder="Enter product description"
              required
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid product description
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="mr-5">
            <Form.Label column>Manufacturer</Form.Label>
            <Form.Control
              name="manufacturer"
              placeholder="Enter Manufacturer"
              required
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid manufacturer
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicPrice">
            <Form.Label column>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter Price"
              required
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid Price
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label column>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              placeholder="Enter Quantity"
              required
              onChange={() => setIsDirty(true)}
              ref={register}
              max="10000"
            />
            <Form.Control.Feedback type="invalid">
              Please Quantity in number format and quanitity should be less than
              100
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <div className="d-flex justify-content-end">
          <Button variant="warning" type="submit" className="text-white mt-5">
            Add New Product
          </Button>
          <Button
            variant="danger"
            onClick={() => navigation.push("./productList")}
            className=" mt-5 ml-3"
          >
            Cancel
          </Button>
        </div>
      </Form>
      <Prompt when={isDirty} message="Are you sure you want to leave ?" />
    </>
  );
}

export default withRouter(AddProductForm);
