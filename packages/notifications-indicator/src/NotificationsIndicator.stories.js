import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs/react";

import NotificationsIndicator from "./NotificationsIndicator";

const storybook = storiesOf("NotificationsIndicator", module);

storybook.add("default", () => (
  <NotificationsIndicator unreadCount={number("Unread Notif. Count")} />
));
