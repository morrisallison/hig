import React from "react";
import Avatar from "@hig/avatar";
import { Flyout } from "hig-react";

import Action from "./Action";

export default function ProfileAction({ name, children }) {
  return (
    <Action>
      <Flyout anchorPoint="top-right" content={children}>
        <button type="button" className="hig__top-nav__profile-action">
          <Avatar name={name} size="medium" />
        </button>
      </Flyout>
    </Action>
  );
}
