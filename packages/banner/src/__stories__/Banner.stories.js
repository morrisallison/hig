import React, { Component } from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import { selectLanguage } from "./getKnobs";
import Banner from "../Banner";
import renderBannerStory from "./renderBannerStory";
import stories from "./stories";

const storybook = storiesOf("Banner", module);
const infoOptions = { propTables: [Banner] };

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo(infoOptions)(() => {
      const language = selectLanguage();
      const props = getProps({ language });

      return renderBannerStory(props);
    })
  );
});
