import React from "react";
import { shallow } from "enzyme";

import TopViewProduct from "./TopViewProduct";

describe("Testing of TopViewProduct Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TopViewProduct />);
  });

  it("should test snapshot of TopViewProduct page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test header built-in component", () => {
    expect(wrapper.find("h4").exists()).toEqual(true);
  });

  it("should test hr using classname", () => {
    expect(wrapper.find(".bg-warning")).toHaveLength(1);
  });
});
