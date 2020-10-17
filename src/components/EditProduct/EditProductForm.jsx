import React, { useState, useEffect } from "react";
import { withRouter, useHistory, useLocation, Prompt } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Col, Button, Form } from "react-bootstrap";

import axios from "axios";

function EditProductForm() {
  let location = useLocation();
  const { pid } = location.state;
  const [sureEdit, setSureEdit] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [editUser, setEditUser] = useState({
    id: 0,
    productName: "",
    productDesc: "",
    manufacturer: "",
    price: "",
    quantiy: "",
    select: false,
  });

  const { register, handleSubmit, reset } = useForm({
    defaultValues: editUser,
  });

  useEffect(() => {
    async function fetchData() {
      await axios.get(`http://localhost:4000/products/${pid}`).then((res) => {
        setEditUser(res.data);
        reset(res.data);
      });
    }
    fetchData();
  }, [pid, reset]);

  let navigation = useHistory();
  const onSubmit = (formData) => {
    formData.select = false;
    axios.put(`http://localhost:4000/products/${pid}`, formData);
    setSureEdit(true);
    setIsDirty(false);
    navigation.push({
      pathname: "/productList",
      state: { added: "pass" },
    });

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
              max="100"
            />
            <Form.Control.Feedback type="invalid">
              Please Quantity in number format and quanitity should be less than
              100
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <div className="d-flex justify-content-end">
          <Button variant="warning" type="submit" className="text-white mt-5">
            Edit Product
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
      <Prompt
        when={isDirty}
        message="Are you sure you want to leave this edit product page?"
      />
      <Prompt when={sureEdit} message="Are you sure you want to edit?" />
    </>
  );
}

export default withRouter(EditProductForm);
