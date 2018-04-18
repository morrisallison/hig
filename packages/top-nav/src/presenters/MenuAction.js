import React from "react";
import IconButton, { types } from "@hig/icon-button";
import { names } from "@hig/icon";

import Action from "./Action";

export default function MenuAction() {
  return (
    <Action>
      <IconButton name={names.HAMBURGER} type={types.TRANSPARENT} />
    </Action>
  );
}
