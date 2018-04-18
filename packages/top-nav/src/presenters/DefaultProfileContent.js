import React from "react";
import { Button } from "hig-react";

import ProfileContent from "./ProfileContent";
import ProfileContentAction from "./ProfileContentAction";

export default function DefaultProfileContent(props) {
  const {
    name,
    email,
    settingsButtonText,
    signOutButtonText,
    onSettingsButtonClick,
    onSignOutButtonClick
  } = props;

  return (
    <ProfileContent name={name} email={email}>
      <ProfileContentAction>
        <Button
          type="primary"
          size="small"
          title={settingsButtonText}
          onClick={onSettingsButtonClick}
        />
      </ProfileContentAction>
      <ProfileContentAction>
        <Button
          type="secondary"
          size="small"
          title={signOutButtonText}
          onClick={onSignOutButtonClick}
        />
      </ProfileContentAction>
    </ProfileContent>
  );
}
