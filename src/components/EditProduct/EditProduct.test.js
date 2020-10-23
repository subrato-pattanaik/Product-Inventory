import React from "react";
import { Router } from "react-router-dom";
import EditProduct from "./EditProduct";
import { mount } from "enzyme";
import "mutationobserver-shim";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";
//import { Form } from "react-bootstrap";
import { createBrowserHistory } from "history";
describe("Edit Page Component", () => {
  let wrapper;

  beforeEach(() => {
    const history = createBrowserHistory();
    const state = { pid: 1 };
    history.push("/EditProduct", state);
    wrapper = mount(
      <Router history={history}>
        <UserContextAPI.Provider value={{ user: 1 }}>
          <EditProduct.WrappedComponent />
        </UserContextAPI.Provider>
      </Router>
    );
  });

  it("should render About Edit Product component", () => {
    expect(wrapper.find("AboutEditProduct").exists()).toEqual(true);
  });

  it("should render  Edit Product form component", () => {
    expect(wrapper.find("EditProductForm")).toHaveLength(1);
  });
});
