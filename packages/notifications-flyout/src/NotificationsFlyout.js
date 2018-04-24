import React from "react";
import { Text } from "@hig/typography";
import { Flyout } from "hig-react";

import "./notifications-flyout.scss";

export default function NotificationsFlyout(props) {
  const { notifications, children } = props;

  return (
    <Flyout anchorPoint="top-right" content={renderContent(notifications)}>
      <header className="hig__notifications__header">
        <Text>Notifications</Text>
      </header>
      <div className="hig__notifications__list">
        <div className="hig__notifications__list-content hig__notifications__list-content--loaded">
          {children}
        </div>
        <div className="hig__notifications__loading-container" />
      </div>
    </Flyout>
  );
}
