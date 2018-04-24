import React from "react";
import NotificationFlyout from "@hig/notifications-flyout";
import NotificationsIndicator from "@hig/notifications-indicator";
import { Flyout } from "hig-react";

import Action from "./Action";

export default function NotificationsAction({ unreadCount, children }) {
  return (
    <Action>
      <NotificationFlyout notifications={children}>
        <NotificationsIndicator unreadCount={unreadCount} />
      </NotificationFlyout>
    </Action>
  );
}
