import React from "react";
import renderer from "react-test-renderer";

import BannerAction from "./index";

describe.only("Banner/BannerAction", () => {
  it("renders with children", () => {
    const action = <BannerAction>Hello</BannerAction>;
    const tree = renderer.create(action).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
