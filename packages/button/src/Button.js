import React, { Component } from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import {
  availableSizes,
  availableTargets,
  availableTypes,
  availableWidths,
  sizes,
  types,
  widths
} from "./constants";
import ButtonPresenter from "./presenters/ButtonPresenter";

export default class Button extends Component {
  static propTypes = {
    /**
     * Prevents user interaction with the button
     */
    disabled: PropTypes.bool,
    /**
     * A @hig/icon element
     */
    icon: PropTypes.node,
    /**
     * Sets the link of a button
     */
    link: PropTypes.string,
    /**
     * Triggers blur when focus is moved away from icon
     */
    onBlur: PropTypes.func,
    /**
     * Triggers when you click the button
     */
    onClick: PropTypes.func,
    /**
     * Triggers when focus is moved to button
     */
    onFocus: PropTypes.func,
    /**
     * Triggers when you hover over the button
     */
    onHover: PropTypes.func,
    /**
     * Triggers when the user's mouse is over the button
     */
    onMouseEnter: PropTypes.func,
    /**
     * Triggers when the user's mouse is no longer over the button
     */
    onMouseLeave: PropTypes.func,
    /**
     * Specifies size of button
     */
    size: PropTypes.oneOf(availableSizes),
    /**
     * Specifies where to display the linked URL
     */
    target: PropTypes.oneOf(availableTargets),
    /**
     * Sets the title of a button
     */
    title: PropTypes.string.isRequired,
    /**
     * Specifies type of button
     */
    type: PropTypes.oneOf(availableTypes),
    /**
     * Specifies width of button
     */
    width: PropTypes.oneOf(availableWidths)
  };

  static defaultProps = {
    disabled: false,
    size: sizes.STANDARD,
    type: types.PRIMARY,
    width: widths.SHRINK
  };

  render() {
    const {
      disabled,
      icon,
      isPressed,
      link,
      onBlur,
      onClick,
      onFocus,
      onHover,
      onMouseEnter,
      onMouseLeave,
      size,
      target,
      title,
      type,
      width
    } = this.props;

    return (
      <ControlBehavior
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {({
          hasFocus,
          hasHover,
          onBlur: handleBlur,
          onFocus: handleFocus,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }) => (
          <ButtonPresenter
            disabled={disabled}
            hasFocus={hasFocus}
            hasHover={hasHover}
            icon={icon}
            link={link}
            onBlur={handleBlur}
            onClick={onClick}
            onFocus={handleFocus}
            onHover={onHover}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            size={size}
            target={target}
            title={title}
            type={type}
            width={width}
          />
        )}
      </ControlBehavior>
    );
  }
}
