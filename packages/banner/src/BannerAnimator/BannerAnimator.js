import React, { Component } from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";

import { placements, AVAILABLE_PLACEMENTS } from "../placements";

const statuses = {
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  COLLAPSED: "COLLAPSED",
  COLLAPSING: "COLLAPSING",
  EXPANDED: "EXPANDED",
  EXPANDING: "EXPANDING"
};

/**
 * @typedef {Object} BannerAnimatorProps
 * @property {boolean} [isVisible]
 * @property {function(ContainerBag): JSX.Element} children
 */

/**
 * @typedef {Object} BannerAnimatorState
 * @property {string | undefined} status
 */

function getCollapsingState() {
  return {
    status: statuses.COLLAPSING,
    style: {
      height: "0",
      overflow: "hidden"
    }
  };
}

function getCollapsedState() {
  return {
    status: statuses.COLLAPSED
  };
}

function getHiddenState() {
  return {
    status: statuses.HIDDEN,
    style: {
      height: "",
      overflow: ""
    }
  };
}

// function getVisibleState() {
//   return {
//     status: statuses.VISIBLE,
//     style: {
//       height: "",
//       overflow: ""
//     }
//   };
// }

function getExpandedState() {
  return {
    status: statuses.EXPANDED,
    style: {
      height: "",
      overflow: ""
    }
  };
}

function getExpandingState({ wrapper }) {
  return {
    status: statuses.EXPANDING,
    style: {
      height: getChildHeight({ wrapper }),
      overflow: "hidden"
    }
  };
}

/**
 * @param {HTMLDivElement} wrapper
 * @returns {string} Height in pixels
 */
function getChildHeight(wrapper) {
  return `${wrapper.firstElementChild.offsetHeight}px`;
}

/** @type {Component<BannerAnimatorProps, BannerAnimatorState>} */
class BannerAnimator extends Component {
  /** @type {BannerAnimatorState} */
  state = {
    // isVisible: null,
    // status: null
  };

  /**
   * @param {BannerAnimatorProps} nextProps
   * @param {BannerAnimatorState} prevState
   * @returns {Object | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const { isVisible: shouldBeVisible } = nextProps;
    const { /* isVisible: isCurrentlyVisible, */ status, wrapper } = prevState;

    // if (shouldBeVisible === isCurrentlyVisible) return null;

    switch (status) {
      case statuses.HIDDEN:
        return shouldBeVisible ? getCollapsedState() : null;
      case statuses.COLLAPSED:
      case statuses.COLLAPSING:
        return shouldBeVisible ? getExpandingState({ wrapper }) : null;
      case statuses.EXPANDED:
      case statuses.EXPANDING:
        return shouldBeVisible ? null : getCollapsingState();
      default:
        return shouldBeVisible ? getExpandedState() : getHiddenState();
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { status, wrapper } = prevState;
  //   if (prevState.status === statuses.HIDDEN && status === statuses.COLLAPSED) {
  //     requestAnimationFrame(() => {
  //       this.setState(getExpandingState({ wrapper }));
  //     });
  //   }
  // }

  handleReady = () => {
    console.log("handleReady called");
    const { status, wrapper } = prevState;

    if (prevState.status === statuses.HIDDEN && status === statuses.COLLAPSED) {
      requestAnimationFrame(() => {
        this.setState(getExpandingState({ wrapper }));
      });
    }
  };

  handleCollapse() {
    this.setState(getCollapsedState(), () => {
      this.setState(getHiddenState());
    });
  }

  handleExpand() {
    this.setState(getExpandedState());
  }

  handleTransitionEnd = event => {
    const { status, wrapper } = this.state;

    if (event.target !== wrapper) return;

    switch (status) {
      case statuses.COLLAPSING:
        handleCollapse();
        return;
      case statuses.EXPANDING:
        handleExpand();
        return;
      default:
        return;
    }
  };

  refWrapper = wrapper => {
    this.setState({ wrapper });
  };

  render() {
    const { children } = this.props;
    const { status, style } = this.state;
    const { handleReady, refWrapper } = this;

    if (status === statuses.HIDDEN) {
      return null;
    }

    return (
      <div
        onTransitionEnd={this.handleTransitionEnd}
        style={{ transition: "500ms height ease", ...style }}
        ref={refWrapper}
      >
        {children({ handleReady })}
      </div>
    );
  }
}

BannerAnimator.defaultProps = {
  isVisible: true,
  placement: placements.TOP
};

BannerAnimator.propTypes = {
  /** Animation; Determines the visibility of the banner */
  isVisible: PropTypes.bool.isRequired,
  /** Determines the direction of the animation */
  placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
  /** A render prop, that renders the component to be animated */
  children: PropTypes.func.isRequired
};

export default polyfill(BannerAnimator);
