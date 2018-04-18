import React from "react";
import IconButton, { types } from "@hig/icon-button";
import { Flyout } from "hig-react";
import { names } from "@hig/icon";

import Action from "./Action";

export default function HelpAction({ children }) {
  return (
    <Action>
      <Flyout anchorPoint="top-right" content={children}>
        <IconButton name={names.HELP} type={types.TRANSPARENT} />
      </Flyout>
    </Action>
  );
}
