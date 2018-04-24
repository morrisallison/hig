import React from "react";
import { storiesOf } from "@storybook/react";
import { Notification } from "@hig/notifications-flyout";

import TopNav from "../index";

import accountLogo from "./accounts-logo.svg";

const storybook = storiesOf("TopNav", module);

storybook.add("accounts", () => (
  <TopNav
    logo={
      <TopNav.Logo
        label="Autodesk Accounts"
        title="Autodesk Accounts"
        link="https://autodesk.com"
        dangerouslySetInnerHTML={{ __html: accountLogo }}
      />
    }
    rightActions={
      <TopNav.DefaultActions
        profileName="Peter Parker"
        notificationsUnreadCount={1}
        notifications={[
          <Notification key="1" id="1">
            Hello world
          </Notification>
        ]}
        helpContent={
          <div>
            <h3>Help</h3>
            <p>You can put what ever you want in here.</p>
          </div>
        }
        profileContent={
          <div>
            <h3>Profile</h3>
            <p>You can put what ever you want in here.</p>
          </div>
        }
      />
    }
  />
));
