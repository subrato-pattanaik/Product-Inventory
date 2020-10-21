import React from "react";
import { shallow } from "enzyme";

import About from "./About";

describe("About Page Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("should test snapshot of About page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test image built-in component", () => {
    expect(wrapper.find("img").exists()).toEqual(true);
  });

  it("should test image using property selector built-in component", () => {
    expect(wrapper.find('[alt="First slide"]').exists()).toEqual(true);
  });

  it("should test image built-in component count", () => {
    expect(wrapper.find("img")).toHaveLength(4);
  });
});
