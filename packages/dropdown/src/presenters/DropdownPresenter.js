import React from "react";
import PropTypes from "prop-types";

import InputPresenter from "./InputPresenter";
import MenuPresenter from "./MenuPresenter";
import renderWrapper from "./WrapperPresenter";
import renderOptions from "./renderOptions";

/** @typedef {import("./renderOptions").OptionMeta} OptionMeta */
/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

function renderInput(props) {
  const {
    id,
    toggleMenu,
    getInputProps,
    label,
    instructions,
    placeholder,
    disabled,
    required,
    onBlur,
    onFocus
  } = props;

  const inputProps = getInputProps({
    id,
    label,
    instructions,
    placeholder,
    disabled,
    required,
    onBlur,
    onFocus,
    onClick: toggleMenu
  });

  return <InputPresenter key="input" {...inputProps} />;
}

function renderMenuWithOptions(props) {
  const {
    isOpen,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    selectedItem,
    selectedItems,
    multiple,
    options,
    formatOption
  } = props;
  const menuProps = getMenuProps({ isOpen });
  const children = renderOptions({
    multiple,
    options,
    formatOption,
    getItemProps,
    highlightedIndex,
    selectedItem,
    selectedItems
  });

  return (
    <MenuPresenter key="menu" {...menuProps}>
      {children}
    </MenuPresenter>
  );
}

/**
 * @param {DownshiftHelpers} downshift
 * @returns {JSX.Element}
 */
export default function DropdownPresenter({ disabled }) {
  /**
   * The `Wrapper` presenter is used as a function to avoid having to use Downshift's `getRootProps`
   * @see https://github.com/paypal/downshift#getrootprops
   */
  return renderWrapper({
    disabled,
    children: [renderInput(), renderMenuWithOptions()]
  });
}

DropdownPresenter.propTypes = {
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
   * An array of objects to choose from
   */
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
  /**
   * An array of unique values of any type except `undefined`
   */
  options: PropTypes.arrayOf(PropTypes.any),
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
  formatOption: PropTypes.func,
  /**
   * Calls the provided callback when the user presses a key while the dropdown has focus
   */
  // onKeydown: PropTypes.func

  /** @see Downshift */
  toggleMenu: PropTypes.func,
  /** @see Downshift */
  getInputProps: PropTypes.func,
  /** @see Downshift */
  isOpen: PropTypes.func,
  /** @see Downshift */
  getItemProps: PropTypes.func,
  /** @see Downshift */
  getMenuProps: PropTypes.func,
  /** @see Downshift */
  highlightedIndex: PropTypes.number,
  /** @see Downshift */
  selectedItem: PropTypes.any,
  /** @see Downshift */
  selectedItems: PropTypes.arrayOf(PropTypes.any)
};

DropdownPresenter.defaultProps = {
  getInputProps: () => ({}),
  getMenuProps: () => ({})
};
