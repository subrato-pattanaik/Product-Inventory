import React from "react";
import { mount } from "enzyme";
import "mutationobserver-shim";
import Profile from "./Profile";
import { BrowserRouter } from "react-router-dom";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";

describe("Profile Page Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <UserContextAPI.Provider value={{ user: 1 }}>
          <Profile.WrappedComponent />
        </UserContextAPI.Provider>
      </BrowserRouter>
    );
  });

  it("should test snapshot of Header page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
