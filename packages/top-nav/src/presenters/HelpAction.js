import React from "react";
import PropTypes from "prop-types";
import Icon, { names } from "@hig/icon";
import Flyout, { anchorPoints } from "@hig/flyout";

import "@hig/icon/build/index.css";
import "@hig/flyout/build/index.css";

import Action, { dividers, spacings, types } from "./Action";

function getContainerPosition(position) {
  const { anchorPoint, topOffset, leftOffset } = position;

  if (!topOffset || !leftOffset) return position;

  return {
    anchorPoint,
    topOffset: topOffset + 19,
    leftOffset: leftOffset - 4
  };
}

function getPointerPosition() {
  return {
    topOffset: -6,
    leftOffset: -20
  };
}

export default function HelpAction({ children }) {
  return (
    <Flyout
      content={children}
      anchorPoint={anchorPoints.TOP_RIGHT}
      containerPosition={getContainerPosition}
      pointerPosition={getPointerPosition}
      fallbackAnchorPoints={[]}
    >
      {({ handleClick }) => (
        <Action
          fitContent
          type={types.ICON_BUTTON}
          spacing={spacings.RIGHT}
          divider={dividers.RIGHT}
          onClick={handleClick}
        >
          <Icon name={names.HELP} />
        </Action>
      )}
    </Flyout>
  );
}

HelpAction.propTypes = {
  /** Content to render inside the help flyout */
  children: PropTypes.node
};
