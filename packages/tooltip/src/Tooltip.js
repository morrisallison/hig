import React from "react";
import PropTypes from "prop-types";
import Flyout, {
  dislocateContainer,
  AVAILABLE_ANCHOR_POINTS
} from "@hig/flyout";
import PanelPresenter from "./presenters/PanelPresenter";
import PointerPresenter from "./presenters/PointerPresenter";

export default function Tooltip(props) {
  return <Flyout {...props} />;
}

Tooltip.defaultProps = {
  /**
   * @param {import("@hig/flyout").Coordinates} coordinates
   * @returns {import("@hig/flyout").Coordinates}
   */
  alterCoordinates(coordinates) {
    return dislocateContainer(coordinates, 10);
  },
  /**
   * @param {import("@hig/flyout").PanelRendererPayload} payload
   */
  /* eslint-disable-next-line react/prop-types */
  panel({ innerRef, content }) {
    return <PanelPresenter innerRef={innerRef}>{content}</PanelPresenter>;
  },
  pointer: <PointerPresenter />
};

Tooltip.propTypes = {
  /** Manipulate flyout coordinates before rendering */
  alterCoordinates: PropTypes.func,
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** Target component to open the flyout. Can be either a node or a render function */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Content for the flyout. Can be either a node or a render function */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * When the flyout overflows the viewport, it'll attempt to
   * use the given anchor points in order to keep the flyout
   * within the viewport.
   */
  fallbackAnchorPoints: PropTypes.arrayOf(
    PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
  ).isRequired,
  /** Use to render a custom flyout panel. Can be either a node or a render function */
  panel: PropTypes.func,
  /** Function called when the flyout is open, and a click event occurs outside the flyout */
  onClickOutside: PropTypes.func,
  /** Function called when the flyout closes */
  onClose: PropTypes.func,
  /** Function called when the flyout opens */
  onOpen: PropTypes.func,
  /** When provided, it overrides the flyout's open state */
  open: PropTypes.bool
};
