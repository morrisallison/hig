import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export const types = Object.freeze({
  BUTTON: "button",
  ICON_BUTTON: "icon-button",
  WRAPPER: "wrapper"
});

export const dividers = Object.freeze({
  LEFT: "left",
  RIGHT: "right",
  BOTH: "both"
});

export const spacings = Object.freeze({
  LEFT: "left",
  RIGHT: "right",
  BOTH: "both"
});

export const availableTypes = Object.freeze(Object.values(types));
export const availableDivides = Object.freeze(Object.values(dividers));
export const availableSpacing = Object.freeze(Object.values(spacings));

const modifierByDivider = {
  [dividers.LEFT]: "hig__top-nav__action--divider-left",
  [dividers.RIGHT]: "hig__top-nav__action--divider-right",
  [dividers.BOTH]: "hig__top-nav__action--divider-both"
};

const modifierBySpacing = {
  [spacings.LEFT]: "hig__top-nav__action--spacing-left",
  [spacings.RIGHT]: "hig__top-nav__action--spacing-right",
  [spacings.BOTH]: "hig__top-nav__action--spacing-both"
};

const modifierByType = {
  [types.BUTTON]: "hig__top-nav__action--button",
  [types.ICON_BUTTON]: "hig__top-nav__action--icon-button"
};

const elementByType = {
  [types.ICON_BUTTON]: "button",
  [types.BUTTON]: "button",
  [types.WRAPPER]: "div"
};

const typePropByType = {
  [types.ICON_BUTTON]: "button",
  [types.BUTTON]: "button"
};

export default function Action(props) {
  const { divider, fitContent, spacing, type, onClick, children } = props;
  const Element = elementByType[type];
  const typeProp = typePropByType[type];
  const classes = cx(
    "hig__top-nav__action",
    modifierByDivider[divider],
    modifierBySpacing[spacing],
    modifierByType[type],
    { "hig__top-nav__action--fit-content": fitContent }
  );

  return (
    <Element onClick={onClick} className={classes} type={typeProp}>
      {children}
    </Element>
  );
}

Action.defaultProps = {
  type: types.WRAPPER
};

Action.propTypes = {
  onClick: PropTypes.func,
  divider: PropTypes.oneOf(availableDivides),
  spacing: PropTypes.oneOf(availableSpacing),
  fitContent: PropTypes.bool,
  type: PropTypes.oneOf(availableTypes).isRequired,
  /** Content to render inside an action */
  children: PropTypes.node
};
