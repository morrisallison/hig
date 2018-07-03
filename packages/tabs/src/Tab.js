import React from "react";
import PropTypes from "prop-types";

import TabPresenter from "./presenters/TabPresenter";

/**
 * @param {import("./presenters/TabPresenter").TabPresenterProps} props
 * @returns {JSX.Element}
 */
function defaultRenderer(props) {
  return <TabPresenter {...props} />;
}

/**
 * @typedef {Object} TabProps
 * @property {boolean} [active]
 * @property {string} [children]
 * @property {string} [label]
 * @property {Function} [onClick]
 * @property {string} render A render prop allowing for custom tab components to be rendered
 */

/**
 * This component is a facade for interfacing with the `Tabs` component.
 * The logic within the `Tabs` component is strictly separated from the `TabPresenter`.
 *
 * @param {TabProps} props
 * @returns {null}
 */
export default function Tab() {
  return null;
}

Tab.defaultProps = {
  render: defaultRenderer
};

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  render: PropTypes.func.isRequired
};
