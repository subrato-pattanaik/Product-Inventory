import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("should test snapshot of App page", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
it("should test All Route component exist or not", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("AllRoute").exists()).toEqual(true);
});
