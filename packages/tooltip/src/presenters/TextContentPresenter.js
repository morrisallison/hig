import React from "react";
import PropTypes from "prop-types";
import { Text } from "@hig/typography";
import "@hig/typography/build/index.css";

import ContentPresenter from "./ContentPresenter";
import "./TextContentPresenter.scss";

export default function TextContentPresenter({ children }) {
  return (
    <ContentPresenter>
      <span className="hig__tooltip-v1__text-content">
        <Text color="hig-white">{children}</Text>
      </span>
    </ContentPresenter>
  );
}

TextContentPresenter.propTypes = {
  /** Text content */
  children: PropTypes.string
};
