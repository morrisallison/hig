import React, { Component } from "react";
import PropTypes from "prop-types";

import DropdownPresenter from "./presenters/DropdownPresenter";
import DropdownBehavior from "./DropdownBehavior";

/** @typedef {import("./presenters/renderOptions").OptionMeta} OptionMeta */
/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

export default class Dropdown extends Component {
  static propTypes = {
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
    /**
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Placeholder text to render when an option has not been selected
     */
    placeholder: PropTypes.string,
    /**
     * Enables multiple selection
     */
    multiple: PropTypes.bool,
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * default selected option
     */
    defaultValue: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    /**
     * An array of objects to choose from
     */
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    /**
     * An array of unique values of any type except `undefined`
     */
    options: PropTypes.arrayOf(PropTypes.any),
    /**
     * Called with the selected option when the value changes
     */
    onChange: PropTypes.func,
    /**
     * Called when the text field is blurred
     */
    onBlur: PropTypes.func,
    /**
     * Called when the text field is focused
     */
    onFocus: PropTypes.func,
    /**
     * Used to format options into human readable strings
     */
    formatOption: PropTypes.func
    /**
     * Calls the provided callback when the user presses a key while the dropdown has focus
     */
    // onKeydown: PropTypes.func
  };

  static defaultProps = {
    /**
     * @param {OptionMeta} option
     * @returns {string}
     */
    formatOption(option) {
      return option ? String(option) : "";
    }
  };

  /**
   * > Why not just pass the `props.onChange` directly to Downshift?
   *
   *  Downshift provides all of it's helpers and state to `onChange`.
   *  We don't want to expose the entire Downshift API to consumers.
   *
   * @param {OptionMeta | OptionMeta[]} value
   * @param {DownshiftHelpers} downshift
   */
  handleChange = value => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }
  };

  /**
   * @param {DownshiftHelpers} downshift
   * @returns {JSX.Element}
   */
  renderPresenter = behaviorProps => {
    const presenterProps = {
      ...this.props,
      ...behaviorProps
    };

    /**
     * The `Wrapper` presenter is used as a function to avoid having to use Downshift's `getRootProps`
     * @see https://github.com/paypal/downshift#getrootprops
     */
    return <DropdownPresenter {...presenterProps} />;
  };

  render() {
    const { id, multiple, formatOption } = this.props;
    const props = {
      id,
      multiple,
      formatOption
    };

    return (
      <DropdownBehavior {...props}>{this.renderPresenter}</DropdownBehavior>
    );
  }
}
