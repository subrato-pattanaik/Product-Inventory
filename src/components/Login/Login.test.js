import React from "react";
import { mount } from "enzyme";
import "mutationobserver-shim";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import moxios from "moxios";

let mockResponse = {
  status: 200,
  response: [
    {
      id: 1,
      email: "subro@gmail.com",
      password: "123456",
      firstname: "subro",
      lastname: "pattanaik",
      location: "pune",
      mobileno: "2312312412",
      select: false,
    },
    {
      id: 2,
      email: "bro@gmail.com",
      password: "123456",
      firstname: "bro",
      lastname: "pattanaik",
      location: "pune",
      mobileno: "2312312412",
      select: false,
    },
    {
      id: 3,
      email: "hr@gmail.com",
      password: "asdasd",
      firstname: "hrishi",
      lastname: "punde",
      location: "pune",
      mobileno: "2312312412",
      select: false,
    },
  ],
};

describe("Login Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Login.WrappedComponent />
      </BrowserRouter>
    );
  });
  it("should test login class in container", () => {
    expect(wrapper.find(".login").exists()).toEqual(true);
  });

  it("should test empty class component", () => {
    expect(wrapper.find("other-class").exists()).toEqual(false);
  });

  it("should test Form component", () => {
    expect(wrapper.find("Form")).toHaveLength(1);
  });
});

describe("App Component Mount Test ", () => {
  let mountWrapper;

  beforeAll(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it("renders correctly", (done) => {
    moxios.stubRequest("http://localhost:4000/users", mockResponse);
    mountWrapper = mount(
      <BrowserRouter>
        <Login.WrappedComponent />
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
