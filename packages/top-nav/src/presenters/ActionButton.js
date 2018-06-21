import React from "react";
import PropTypes from "prop-types";

export default function ActionButton({ children }) {
  return (
    <button type="button" className="hig__top-nav__action-button">
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  /** Content to render inside an action */
  children: PropTypes.node
};
