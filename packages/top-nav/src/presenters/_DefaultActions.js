import React from "react";

import NotificationsAction from "./NotificationsAction";
import HelpAction from "./HelpAction";
import Interactions from "./Interactions";
import ProfileAction from "./ProfileAction";
import DefaultProfileContent from "./DefaultProfileContent";

export default function DefaultActions(props) {
  const {
    notifications,
    notificationsUnreadCount,
    helpContent,
    profileName,
    profileEmail,
    profileSettingsButtonText,
    profileSignOutButtonText,
    onSettingsButtonClick,
    onSignOutButtonClick
  } = props;

  return (
    <Interactions>
      <NotificationsAction unreadCount={notificationsUnreadCount}>
        {notifications}
      </NotificationsAction>
      <HelpAction>{helpContent}</HelpAction>
      <ProfileAction name={profileName}>
        <DefaultProfileContent
          name={profileName}
          email={profileEmail}
          settingsButtonText={profileSettingsButtonText}
          signOutButtonText={profileSignOutButtonText}
          onSettingsButtonClick={onSettingsButtonClick}
          onSignOutButtonClick={onSignOutButtonClick}
        />
      </ProfileAction>
    </Interactions>
  );
}
