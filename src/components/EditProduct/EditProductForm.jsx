import React, { useState, useEffect } from "react";
import { withRouter, useHistory, useLocation, Prompt } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Button, Form } from "react-bootstrap";

import axios from "axios";

function EditProductForm() {
  let location = useLocation();
  const { pid } = location.state;
  const [sureEdit, setSureEdit] = useState(false);

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
  const schema = yup.object().shape({
    productName: yup.string().required("*Product Name is mandatory"),

    productDesc: yup.string().required("*Product Description is mandatory"),
    manufacturer: yup.string().required("*Manufacturer details is mandatory"),
    price: yup
      .string()
      .required("*price is mandatory")
      .matches(/^[0-9]*$/, "Enter Number only")
      .max(6, "We dont have product which exceeds 10 lakh"),
    quantity: yup
      .string()
      .required("Quantity is mandatory")
      .matches(/^[0-9]*$/, "Enter Number only")
      .max(4, "We dont take product more than 9999"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
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
    setIsDirty(false);
    setSureEdit(true);
    navigation.push({
      pathname: "/productList",
      state: { added: "pass" },
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} className="mr-5">
            <Form.Label column>Product Name</Form.Label>
            <Form.Control
              name="productName"
              placeholder="Enter product Name"
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            {errors.productName && (
              <div className="small lead text-danger mb-2">
                {errors.productName.message}
              </div>
            )}
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label column>Product Description</Form.Label>
            <Form.Control
              name="productDesc"
              placeholder="Enter product description"
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            {errors.productDesc && (
              <div className="small lead text-danger mb-2">
                {errors.productDesc.message}
              </div>
            )}
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="mr-5">
            <Form.Label column>Manufacturer</Form.Label>
            <Form.Control
              name="manufacturer"
              placeholder="Enter Manufacturer"
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            {errors.manufacturer && (
              <div className="small lead text-danger mb-2">
                {errors.manufacturer.message}
              </div>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicPrice">
            <Form.Label column>Price</Form.Label>
            <Form.Control
              name="price"
              placeholder="Enter Price"
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            {errors.price && (
              <div className="small lead text-danger mb-2">
                {errors.price.message}
              </div>
            )}
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label column>Quantity</Form.Label>
            <Form.Control
              name="quantity"
              placeholder="Enter Quantity"
              onChange={() => setIsDirty(true)}
              ref={register}
            />
            {errors.quantity && (
              <div className="small lead text-danger mb-2">
                {errors.quantity.message}
              </div>
            )}
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
