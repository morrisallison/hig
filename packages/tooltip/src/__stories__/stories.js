import React from "react";
import Button from "@hig/button";

import TextContentPresenter from "../presenters/TextContentPresenter";

export default [
  {
    description: "default",
    getProps: () => ({
      anchorPoint: "top-center",
      content: (
        <TextContentPresenter>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque.
        </TextContentPresenter>
      ),
      children: <Button title="Open Tooltip" />
    })
  }
];
