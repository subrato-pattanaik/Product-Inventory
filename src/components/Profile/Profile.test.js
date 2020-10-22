import React from "react";
import { mount } from "enzyme";
import "mutationobserver-shim";
import Profile from "./Profile";
import { BrowserRouter } from "react-router-dom";

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
