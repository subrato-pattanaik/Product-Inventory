import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header.WrappedComponent />);
  });

  it("should test snapshot of Header page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test Navbar Component", () => {
    expect(wrapper.is("Navbar")).toEqual(true);
  });

  it("should test empty class component", () => {
    expect(wrapper.find("other-class").exists()).toEqual(false);
  });

  it("should test Nav bootstrap component which is inside Navlinks custom component", () => {
    const component = mount(
      <BrowserRouter>
        <Header.WrappedComponent />
      </BrowserRouter>
    );
    expect(component.find("Nav").exists()).toEqual(true);
  });
});
