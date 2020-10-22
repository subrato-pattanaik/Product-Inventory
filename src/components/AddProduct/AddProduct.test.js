import React from "react";
import { BrowserRouter } from "react-router-dom";
import AddProduct from "./AddProduct";
import { mount } from "enzyme";
import "mutationobserver-shim";
import { Form } from "react-bootstrap";

describe("ProductList Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <AddProduct.WrappedComponent />
      </BrowserRouter>
    );
  });
  it("should cpontain AboutAddProduct component", () => {
    expect(wrapper.find("AboutAddProduct")).toHaveLength(1);
  });

  it("should test empty class component in Addproduct component", () => {
    expect(wrapper.find("other-class").exists()).toEqual(false);
  });

  it("should contain any Form in ProductList component", () => {
    expect(wrapper.find(Form).exists()).toEqual(true);
  });

  it("should contain Product Name field in AddProductForm", () => {
    expect(
      wrapper.containsMatchingElement(
        <Form.Label column>Product Name</Form.Label>
      )
    ).toEqual(true);
  });

  it("should contain of Description field AddProductForm", () => {
    expect(
      wrapper.containsMatchingElement(
        <div className="small lead mb-5">
          <p>You can add a new product here</p>
          <p>
            Please fill all the details honestly and make sure that all the
            fields are necessary.
          </p>
          <p>You can view the added product in the product list</p>
        </div>
      )
    ).toEqual(true);
  });
});
