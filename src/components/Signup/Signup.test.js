import React from "react";
import { shallow, mount } from "enzyme";
import "mutationobserver-shim";
import Signup from "./Signup";
import { BrowserRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

describe("Sign up Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup.WrappedComponent />);
  });

  it("should test snapshot of Header page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test Form component using Full dom rendering", () => {
    const component = mount(
      <BrowserRouter>
        <Signup.WrappedComponent />
      </BrowserRouter>
    );
    expect(component.find("Form").exists()).toEqual(true);
  });

  it("should test Signup title using Full dom rendering", () => {
    const component = mount(
      <BrowserRouter>
        <Signup.WrappedComponent />
      </BrowserRouter>
    );
    expect(component.find("h3").text()).toEqual("Sign Up");
  });

  it("should contain email field there", () => {
    const component = mount(
      <BrowserRouter>
        <Signup.WrappedComponent />
      </BrowserRouter>
    );
    expect(
      component.containsMatchingElement(
        <Form.Label>
          Email<span className="text-danger">*</span>
        </Form.Label>
      )
    ).toEqual(true);
  });
});
