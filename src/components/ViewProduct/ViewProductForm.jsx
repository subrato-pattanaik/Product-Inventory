import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Col, Form } from "react-bootstrap";

import axios from "axios";

function ViewProductForm() {
  let location = useLocation();
  const { pid } = location.state;
  const [editUser, setEditUser] = useState({
    id: 0,
    productName: "",
    productDesc: "",
    manufacturer: "",
    price: "",
    quantiy: "",
    select: false,
  });

  const { register, reset } = useForm({
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

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} className="mr-5">
          <Form.Label column>Product Name</Form.Label>
          <Form.Control
            name="productName"
            placeholder="Enter product Name"
            disabled={true}
            ref={register}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label column>Product Description</Form.Label>
          <Form.Control
            name="productDesc"
            placeholder="Enter product description"
            disabled={true}
            ref={register}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="mr-5">
          <Form.Label column>Manufacturer</Form.Label>
          <Form.Control
            name="manufacturer"
            placeholder="Enter Manufacturer"
            disabled={true}
            ref={register}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicPrice">
          <Form.Label column>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter Price"
            disabled={true}
            ref={register}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label column>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="Enter Quantity"
            disabled={true}
            ref={register}
            max="100"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default withRouter(ViewProductForm);
