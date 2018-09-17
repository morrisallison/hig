import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";

import Avatar, { sizes } from "./index";

describe("avatar/Avatar", () => {
  takeSnapshotsOf(Avatar, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders will all props",
      props: {
        name: "Jon Snow",
        image: "http://placekitten.com/g/64/64",
        onImageError: function handleImageError() {},
        size: sizes.LARGE_36
      }
    }
  ]);

  it("renders initials based on the provided name", () => {
    const wrapper = mount(<Avatar name="Jon Snow" />);

    expect(wrapper.find("Initials")).toIncludeText("JS");
  });

  describe("when an error occurs loading the given image", () => {
    const handleImageError = jest.fn();

    function mountWithImage() {
      return mount(<Avatar image="http://placekitten.com/g/64/64" />);
    }

    it("doesn't render the image", () => {
      const wrapper = mountWithImage();

      expect(wrapper.find("img")).toBePresent();

      wrapper.find("img").simulate("error");

      expect(wrapper.find("img")).not.toBePresent();
    });

    it("calls image error handler", () => {
      const wrapper = mountWithImage();

      expect(handleImageError).not.toHaveBeenCalled();

      wrapper.find("img").simulate("error");

      expect(handleImageError).toHaveBeenCalledWith(expect.any(Error));
    });
  });
});
