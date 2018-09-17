import React, { Component } from "react";
import PropTypes from "prop-types";
import Flyout, { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
import Avatar, { sizes } from "@hig/avatar";
import { combineEventHandlers } from "@hig/utils";
import "@hig/avatar/build/index.css";
import "@hig/flyout/build/index.css";

import ProfileButtonPresenter from "./presenters/ProfileButtonPresenter";

export default class ProfileFlyout extends Component {
  static propTypes = {
    /** Manipulate flyout coordinates before each render */
    alterCoordinates: PropTypes.func,
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
    /** Url pointing to signed in user's avatar image */
    avatarImage: PropTypes.string,
    /** Signed-in user's name */
    avatarName: PropTypes.string,
    /** Content to be rendered inside the flyout */
    children: PropTypes.node,
    /**
     * When the flyout overflows the viewport, it'll attempt to
     * use the given anchor points in order to keep the flyout
     * within the viewport.
     */
    fallbackAnchorPoints: PropTypes.arrayOf(
      PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
    ).isRequired,
    /** Called when user clicks away from the profile flyout */
    onProfileClickOutside: PropTypes.func,
    /** Called when user clicks the profile image */
    onProfileImageClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool
  };

  render() {
    const {
      alterCoordinates,
      anchorPoint,
      avatarImage,
      avatarName,
      children,
      fallbackAnchorPoints,
      onProfileClickOutside,
      onProfileImageClick,
      open
    } = this.props;

    return (
      <Flyout
        alterCoordinates={alterCoordinates}
        anchorPoint={anchorPoint}
        content={children}
        fallbackAnchorPoints={fallbackAnchorPoints}
        onClickOutside={onProfileClickOutside}
        open={open}
        panel={({ innerRef }) => (
          <Flyout.Panel innerRef={innerRef}>{children}</Flyout.Panel>
        )}
      >
        {({ handleClick }) => (
          <ProfileButtonPresenter
            avatarImage={avatarImage}
            avatarName={avatarName}
            onClick={combineEventHandlers(handleClick, onProfileImageClick)}
          />
        )}
      </Flyout>
    );
  }
}
