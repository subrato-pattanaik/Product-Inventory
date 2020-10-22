import { mount, shallow } from "enzyme";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "../About/About";
import toJson from "enzyme-to-json";
import AllRoute from "./AllRoute";

let pathMap = [];
describe("all the test of AllRoute page", () => {
  it("should test snapshot of AllRoute page", () => {
    const wrapper = shallow(<AllRoute />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should renders the AllRoute component", () => {
    const wrapper = shallow(<AllRoute />);
    expect(wrapper).toBeTruthy();
  });

  it("should show Suspense component", () => {
    const component = shallow(<AllRoute />);
    expect(component.find("Suspense")).toHaveLength(1);
  });

  it("should show 9 route components", () => {
    const component = shallow(<AllRoute />);
    expect(component.find("Route")).toHaveLength(9);
  });

  let component = "";
  beforeAll(async () => {
    component = mount(
      <BrowserRouter>
        <AllRoute />
      </BrowserRouter>
    );

    pathMap = await component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  it("should show About component for / router ", () => {
    console.log(pathMap);
    expect(pathMap["/"]._result).toBe(About);
  });

  afterAll(() => {
    component.unmount();
  });
});
