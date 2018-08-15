import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import RichText from "@hig/rich-text";
import * as transition from "react-transition-group/Transition";

import { types } from "../types";
import DismissButtonPresenter from "./DismissButtonPresenter";
import "./NotificationPresenter.scss";

const modifiersByType = {
  [types.ERROR]: "hig__notification-v1__content--error",
  [types.PRIMARY]: "hig__notification-v1__content--primary",
  [types.SUCCESS]: "hig__notification-v1__content--success",
  [types.WARNING]: "hig__notification-v1__content--warning"
};

const modifiersByTransitionStatus = {
  [transition.EXITED]: "hig__notification-v1--exited",
  [transition.EXITING]: "hig__notification-v1--exiting"
};

export default function NotificationPresenter(props) {
  const {
    children,
    dismissButtonTitle,
    featured,
    height,
    innerRef,
    onDismissButtonClick,
    showDismissButton,
    timestamp,
    transitionStatus,
    type,
    unread
  } = props;

  const notificationClasses = cx(
    "hig__notification-v1",
    modifiersByTransitionStatus[transitionStatus]
  );

  const contentClasses = cx(
    "hig__notification-v1__content",
    modifiersByType[type],
    {
      "hig__notification-v1__content--featured": featured,
      "hig__notification-v1__content--unread": unread
    }
  );

  return (
    <div
      className={notificationClasses}
      ref={innerRef}
      role="listitem"
      style={{ height }}
    >
      <div className={contentClasses}>
        <RichText size="small">{children}</RichText>
        {timestamp}
        {showDismissButton ? (
          <DismissButtonPresenter
            onClick={onDismissButtonClick}
            title={dismissButtonTitle}
          />
        ) : null}
      </div>
    </div>
  );
}

NotificationPresenter.propTypes = {
  children: PropTypes.node,
  dismissButtonTitle: PropTypes.string,
  featured: PropTypes.bool,
  height: PropTypes.string,
  innerRef: PropTypes.func,
  onDismissButtonClick: PropTypes.func,
  showDismissButton: PropTypes.bool,
  timestamp: PropTypes.node,
  transitionStatus: PropTypes.string,
  type: PropTypes.string,
  unread: PropTypes.bool
};
