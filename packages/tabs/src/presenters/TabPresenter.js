import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./tab.scss";

/**
 * @typedef {Object} TabPresenterProps
 * @property {boolean} [active]
 * @property {string} label
 * @property {Function} [onClick]
 */

/**
 * @param {TabPresenterProps} props
 * @returns {JSX.Element}
 */
export default function TabPresenter({ active, label, onClick }) {
  const classes = cx("hig__tabs__tab", {
    "hig__tabs__tab--active": active
  });

  return (
    <div role="button" tabIndex="0" className={classes} onClick={onClick}>
      <span className="hig__tabs__tab-label">{label}</span>
    </div>
  );
}

TabPresenter.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};
