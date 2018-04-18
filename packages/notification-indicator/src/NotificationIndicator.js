import React, { Component } from "react";
import IconButton, { types } from "@hig/icon-button";
import { names } from "@hig/icon";
import cx from "classnames";

import "./notification-indicator.scss";

export default class NotificationIndicator extends Component {
  render() {
    const { unreadCount, ...otherProps } = this.props;
    const indicatorClasses = cx("hig__notification-indicator__unread-marker", {
      "hig__notification-indicator__unread-marker--hidden": !unreadCount
    });

    return (
      <div className="hig__notification-indicator">
        <IconButton
          name={names.NOTIFICATION}
          type={types.TRANSPARENT}
          {...otherProps}
        />
        <div className={indicatorClasses}>{unreadCount}</div>
      </div>
    );
  }
}
