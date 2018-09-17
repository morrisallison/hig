import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ProfileContentPresenter from "./ProfileContentPresenter";

describe("profile-flyout/presenters/ProfileContentPresenter", () => {
  takeSnapshotsOf(ProfileContentPresenter, [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        profileName: "Pete Parker",
        profileEmail: "spyder-man@autodesk.com",
        children: <span />
      }
    }
  ]);
});
