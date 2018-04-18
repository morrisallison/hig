import React from "react";
import { storiesOf } from "@storybook/react";
import { Notification } from "hig-react";

import TopNav from "../index";

const storybook = storiesOf("TopNav", module);

storybook.add("default", () => (
  <TopNav
    logo={
      <TopNav.LogoImage
        link="https://google.com"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        label="Google"
        title="Google"
      />
    }
    rightActions={
      <TopNav.DefaultActions
        profileName="Peter Parker"
        profileEmail="spiderman@avengers.us"
        onSettingsButtonClick={() => {
          console.log("onSettingsButtonClick");
        }}
        onSignOutButtonClick={() => {
          console.log("onSignOutButtonClick");
        }}
        profileSettingsButtonText="Profile Settings"
        profileSignOutButtonText="Sign Out"
        unreadCount={0}
        notifications={[<Notification>Hello world</Notification>]}
        helpContent={
          <div>
            <h3>Help</h3>
            <p>You can put what ever you want in here.</p>
          </div>
        }
      />
    }
  />
));

storybook.add("leftActions", () => (
  <TopNav
    leftActions={
      <TopNav.Interactions>
        <TopNav.MenuAction />
      </TopNav.Interactions>
    }
    logo={
      <TopNav.LogoImage
        link="https://google.com"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        label="Google"
        title="Google"
      />
    }
    rightActions={
      <TopNav.DefaultActions
        profileName="Peter Parker"
        profileEmail="spiderman@avengers.us"
        onSettingsButtonClick={() => {
          console.log("onSettingsButtonClick");
        }}
        onSignOutButtonClick={() => {
          console.log("onSignOutButtonClick");
        }}
        profileSettingsButtonText="Profile Settings"
        profileSignOutButtonText="Sign Out"
        notifications={null}
        helpContent={
          <div>
            <h3>Help</h3>
            <p>You can put what ever you want in here.</p>
          </div>
        }
      />
    }
  />
));
