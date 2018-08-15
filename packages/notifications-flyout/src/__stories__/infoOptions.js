import React from "react";
import RichText from "@hig/rich-text";

import Notification from "../Notification";
import NotificationsFlyout from "../NotificationsFlyout";
import readme from "../../README.md";

export function createNotificationInfoOptions() {
  return {
    propTables: [Notification],
    source: true,
    text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
  };
}

export function createNotificationsFlyoutInfoOptions() {
  return {
    propTables: [NotificationsFlyout],
    source: true,
    text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
  };
}
