import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs/react";

import NotificationIndicator from "./NotificationIndicator";

const storybook = storiesOf("NotificationIndicator", module);

storybook.add("default", () => (
  <NotificationIndicator unreadCount={number("Unread Notif. Count")} />
));
