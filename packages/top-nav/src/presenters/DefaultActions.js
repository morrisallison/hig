import React from "react";

import NotificationsAction from "./NotificationsAction";
import HelpAction from "./HelpAction";
import Interactions from "./Interactions";
import ProfileAction from "./ProfileAction";

export default function DefaultActions(props) {
  const {
    helpContent,
    notifications,
    notificationsUnreadCount,
    profileContent,
    profileName
  } = props;

  return (
    <Interactions>
      <NotificationsAction unreadCount={notificationsUnreadCount}>
        {notifications}
      </NotificationsAction>
      <HelpAction>{helpContent}</HelpAction>
      <ProfileAction name={profileName}>{profileContent}</ProfileAction>
    </Interactions>
  );
}
