import React from "react";
import { shallow, mount } from "enzyme";
import "mutationobserver-shim";
import Profile from "./Profile";
import { BrowserRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

describe("Profile Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Profile.WrappedComponent />
      </BrowserRouter>
    );
  });

  it("should test snapshot of Header page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
