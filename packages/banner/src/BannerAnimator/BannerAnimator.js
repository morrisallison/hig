import React, { Component } from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";

import { placements, AVAILABLE_PLACEMENTS } from "../placements";
import statuses from "./statuses";

import {
  animateCollapse,
  animateExpand,
  endCollapse,
  endExpand,
  prepareCollapse,
  startCollapse,
  startExpand
} from "./updaters";

/**
 * @typedef {Object} BannerAnimatorProps
 * @property {boolean} [isVisible]
 * @property {boolean} [isOverlay]
 * @property {string} [placement]
 * @property {function(ContainerBag): JSX.Element} children
 */

/**
 * @typedef {Object} BannerAnimatorState
 * @property {string} [status]
 * @property {Object.<string, string>} [wrapperStyle]
 * @property {Object.<string, string>} [innerWrapperStyle]
 * @property {HTMLDivElement} [wrapper]
 * @property {HTMLDivElement} [innerWrapper]
 */

/** @type {Component<BannerAnimatorProps, BannerAnimatorState>} */
class BannerAnimator extends Component {
  /** @type {BannerAnimatorProps} */
  props;

  /** @type {BannerAnimatorState} */
  state = {};

  /**
   * @param {BannerAnimatorProps} nextProps
   * @param {BannerAnimatorState} prevState
   * @returns {BannerAnimatorState | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { isVisible } = nextProps;
    const { status } = prevState;

    switch (status) {
      case statuses.COLLAPSED:
      case statuses.COLLAPSING:
        return isVisible ? startExpand() : null;
      case statuses.EXPANDED:
      case statuses.EXPANDING:
        return isVisible ? null : startCollapse();
      default:
        return isVisible ? endExpand() : endCollapse();
    }
  }

  expand() {
    requestAnimationFrame(() => {
      this.setState(animateExpand);
    });
  }

  collapse() {
    requestAnimationFrame(() => {
      this.setState(animateCollapse);
    });
  }

  collapseFromExpanded() {
    requestAnimationFrame(() => {
      this.setState(prepareCollapse, () => {
        this.collapse();
      });
    });
  }

  /**
   * @param {BannerAnimatorProps} prevProps
   * @param {BannerAnimatorState} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    const { status: prevStatus } = prevState;
    const { status } = this.state;

    if (prevStatus === statuses.EXPANDED && status === statuses.COLLAPSING) {
      this.collapseFromExpanded();
      return;
    }
    if (prevStatus === statuses.COLLAPSING && status === statuses.EXPANDING) {
      this.expand();
      return;
    }
    if (prevStatus === statuses.EXPANDING && status === statuses.COLLAPSING) {
      this.collapse();
      return;
    }
  }

  handleReady = () => {
    const { status } = this.state;

    if (status === statuses.EXPANDING) {
      this.expand();
    }
  };

  /** @param {TransitionEvent} event */
  handleTransitionEnd = event => {
    const { isOverlay } = this.props;
    const { wrapper, innerWrapper } = this.state;
    const expectedTarget = isOverlay ? innerWrapper : wrapper;

    if (event.target !== expectedTarget) return;

    const { status } = this.state;

    if (status === statuses.COLLAPSING) {
      requestAnimationFrame(() => {
        this.setState(endCollapse);
      });
      return;
    }

    if (status === statuses.EXPANDING) {
      requestAnimationFrame(() => {
        this.setState(endExpand);
      });
      return;
    }
  };

  /** @param {HTMLDivElement} wrapper */
  refWrapper = wrapper => {
    this.setState({ wrapper });
  };

  /** @param {HTMLDivElement} innerWrapper */
  refInnerWrapper = innerWrapper => {
    this.setState({ innerWrapper });
  };

  render() {
    const { children: renderChildren, placement } = this.props;
    const { status, wrapperStyle, innerWrapperStyle } = this.state;
    const {
      handleReady,
      handleTransitionEnd,
      refWrapper,
      refInnerWrapper
    } = this;
    const children =
      status === statuses.COLLAPSED ? null : renderChildren({ handleReady });

    return (
      <div
        style={wrapperStyle}
        onTransitionEnd={handleTransitionEnd}
        ref={refWrapper}
      >
        <div style={innerWrapperStyle} ref={refInnerWrapper}>
          {children}
        </div>
      </div>
    );
  }
}

BannerAnimator.defaultProps = {
  isVisible: true,
  isOverlay: true,
  placement: placements.STANDARD
};

BannerAnimator.propTypes = {
  /** Determines the visibility of the banner */
  isVisible: PropTypes.bool.isRequired,
  /** Determines the type of animation used */
  isOverlay: PropTypes.bool.isRequired,
  /** Determines the direction of the animation */
  placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
  /** A render prop, that renders the component to be animated */
  children: PropTypes.func.isRequired
};

export default polyfill(BannerAnimator);
