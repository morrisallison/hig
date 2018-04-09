import React, { Component } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { Button } from "hig-react";
import Banner from "../Banner";

const typeOptions = makeSelectOptions(Banner.types);
const placementOptions = makeSelectOptions(Banner.placements);

const knobGroupIds = {
  basic: "Basic",
  animation: "Animation",
  a11y: "Accessibility",
  actions: "Actions"
};

const knobLabels = {
  type: "Variants",
  children: "Message",
  placement: "Placement",
  isVisible: "Visible",
  isOverlay: "Overlay",
  label: "Label",
  dismissButtonTitle: "Dismiss title",
  onDismiss: "Banner dismissed"
};

function getBannerKnobs(props) {
  console.log("getBannerKnobs", props);
  const {
    type,
    placement,
    children,
    isVisible = true,
    isOverlay = false,
    label,
    dismissButtonTitle,
    onDismiss,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    children: text(knobLabels.children, children, knobGroupIds.basic),
    placement: select(
      knobLabels.placement,
      placementOptions,
      placement,
      knobGroupIds.animation
    ),
    isVisible: boolean(knobLabels.isVisible, isVisible, knobGroupIds.animation),
    isOverlay: boolean(knobLabels.isOverlay, isOverlay, knobGroupIds.animation),
    label: text(knobLabels.label, label, knobLabels.a11y),
    dismissButtonTitle: text(
      knobLabels.dismissButtonTitle,
      dismissButtonTitle,
      knobGroupIds.a11y
    ),
    onDismiss: action(knobLabels.onDismiss, onDismiss, knobGroupIds.actions)
  };
}

class BannerStory extends Component {
  static toggleButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  };

  static baseBannerWrapperStyle = {
    position: "fixed",
    left: "0",
    right: "0"
  };

  static getBannerWrapperStyle({ placement }) {
    if (placement === Banner.placements.BOTTOM) {
      return { ...BannerStory.baseBannerWrapperStyle, bottom: "0" };
    }

    return { ...BannerStory.baseBannerWrapperStyle, top: "0" };
  }

  state = {
    isTogglingVisibility: false
  };

  render() {
    const { children, ...otherProps } = this.getProps();
    const { placement } = otherProps;
    console.log("story render", otherProps);
    const bannerWrapperStyle = BannerStory.getBannerWrapperStyle({ placement });

    return (
      <div>
        <div style={bannerWrapperStyle}>
          <Banner {...otherProps}>{children}</Banner>
        </div>
        <div style={BannerStory.toggleButtonStyle}>
          <Button
            title="Toggle Visibility"
            onClick={this.handleToggleButtonClick}
          />
        </div>
      </div>
    );
  }

  getProps() {
    console.log("getProps", this.props);
    const { isVisible, ...otherProps } = getBannerKnobs(this.props);

    console.log("getProps2", otherProps);

    return {
      isVisible: this.state.isTogglingVisibility ? !isVisible : isVisible,
      ...otherProps
    };
  }

  handleToggleButtonClick = () => {
    const { isTogglingVisibility } = this.state;

    this.setState({
      isTogglingVisibility: !isTogglingVisibility
    });
  };
}

const stories = [
  {
    description: "default",
    props: {}
  },
  {
    description: "verbose, with interactions",
    props: {
      type: Banner.types.WARNING,
      children:
        // eslint-disable-next-line max-len
        "PROCESS COMPLETE: Changes have been made to you document. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      /** @todo Cleanup/refactor */
      actions: ({ isWrappingActions }) => (
        <Banner.Interactions isWrappingActions={isWrappingActions}>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text("Resolve text", "Accept Changes")}
            />
          </Banner.Action>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text("Reject text", "Reject Changes")}
            />
          </Banner.Action>
        </Banner.Interactions>
      )
    }
  }
];

const bannerStories = storiesOf("Banner", module);

stories.forEach(({ description, props }) => {
  const { children, ...otherProps } = props;

  bannerStories.add(description, () => (
    <BannerStory {...otherProps}>{children}</BannerStory>
  ));
});
