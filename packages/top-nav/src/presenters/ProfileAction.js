import React from "react";
import PropTypes from "prop-types";
import Avatar, { sizes } from "@hig/avatar";
import Flyout, { anchorPoints } from "@hig/flyout";

import "@hig/avatar/build/index.css";
import "@hig/flyout/build/index.css";

import Action, { spacings, types } from "./Action";

function getContainerPosition(position) {
  const { anchorPoint, topOffset, leftOffset } = position;

  if (!topOffset || !leftOffset) return position;

  return {
    anchorPoint,
    topOffset: topOffset + 21,
    leftOffset: leftOffset - 3
  };
}

function getPointerPosition() {
  return {
    topOffset: -6,
    leftOffset: -20
  };
}

export default function ProfileAction({ avatarName, avatarImage, children }) {
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
          type={types.BUTTON}
          spacing={spacings.BOTH}
          onClick={handleClick}
        >
          <Avatar
            name={avatarName}
            image={avatarImage}
            size={sizes.MEDIUM_32}
          />
        </Action>
      )}
    </Flyout>
  );
}

ProfileAction.propTypes = {
  /** The name that will converted into initials, and displayed when an image isn't available */
  avatarName: PropTypes.string.isRequired,
  /** Url to a profile image */
  avatarImage: PropTypes.string,
  /** Content to render in the profile flyout */
  children: PropTypes.node
};
