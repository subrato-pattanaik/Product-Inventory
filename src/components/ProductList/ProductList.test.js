import React from "react";
import { mount } from "enzyme";
import "mutationobserver-shim";
import ProductList from "./ProductList";
import { BrowserRouter } from "react-router-dom";
import moxios from "moxios";

let mockResponse = {
  status: 200,
  response: [
    {
      productName: "Lenovo Desktop",
      productDesc: "Lenovo 16GB Ram 2TB harddisk i5 7th Generation",
      manufacturer: "Legend Holdings",
      price: "45000",
      quantity: "100",
      select: false,
      id: 1,
    },
    {
      productName: "Mi Note 9 pro 2 ",
      productDesc:
        "A great smart phone with 8GB Ram, 128GB internal memory and many more feature.",
      manufacturer: "Xiaomi Inc.",
      price: "18000",
      quantity: "80",
      select: false,
      id: 2,
    },
  ],
};

describe("ProductList Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ProductList.WrappedComponent />
      </BrowserRouter>
    );
  });
  it("should cpontain 2 h4 tag in ProductList component", () => {
    expect(wrapper.find("h4")).toHaveLength(2);
  });

  it("should test empty class component", () => {
    expect(wrapper.find("other-class").exists()).toEqual(false);
  });

  it("should not contain any Form in ProductList component", () => {
    expect(wrapper.find("Form")).toHaveLength(0);
  });

  it("should contain delete button in ProductList component", () => {
    expect(wrapper.find('[variant="danger"]').exists()).toEqual(true);
  });

  it("should contain Table in ProductList component", () => {
    expect(wrapper.find('[responsive="sm"]')).toHaveLength(1);
  });
});

describe("Product List Component Mount Test ", () => {
  let mountWrapper;

  beforeAll(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it("Product list renders correctly using moxios", (done) => {
    moxios.stubRequest("http://localhost:4000/products", mockResponse);
    mountWrapper = mount(
      <BrowserRouter>
        <ProductList.WrappedComponent />
      </BrowserRouter>
    );
    moxios.wait(() => {
      mountWrapper.update();
      expect(mountWrapper).toMatchSnapshot();
      done();
      mountWrapper.unmount();
    });
  });
});
