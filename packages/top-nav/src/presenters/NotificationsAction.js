import React from "react";
import NotificationIndicator from "@hig/notification-indicator";

import Action from "./Action";

export default function NotificationsAction(props) {
  return (
    <Action>
      <NotificationIndicator {...props} />
    </Action>
  );
}
