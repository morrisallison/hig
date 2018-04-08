import React, { Component } from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";

import { placements, AVAILABLE_PLACEMENTS } from "../placements";

const statuses = {
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
 * @property {string} [status]
 * @property {Object.<string, string>} [style]
 */

/** @type {Component<BannerAnimatorProps, BannerAnimatorState>} */
class BannerAnimator extends Component {
  /** @type {BannerAnimatorState} */
  state = {};

  /** @type {HTMLDivElement} */
  wrapper;

  /**
   * @returns {string} Height in pixels
   */
  getChildHeight() {
    return `${this.wrapper.firstElementChild.offsetHeight}px`;
  }
  /**
   * @param {BannerAnimatorProps} nextProps
   * @param {BannerAnimatorState} prevState
   * @returns {Object | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const { isVisible } = nextProps;
    const { status } = prevState;

    switch (status) {
      case statuses.COLLAPSED:
      case statuses.COLLAPSING:
        return isVisible ? { status: statuses.EXPANDING } : null;
      case statuses.EXPANDED:
      case statuses.EXPANDING:
        return isVisible ? null : { status: statuses.COLLAPSING };
      default:
        return isVisible
          ? { status: statuses.EXPANDED }
          : {
              status: statuses.COLLAPSED,
              style: {
                transition: "",
                overflow: "hidden",
                height: "0"
              }
            };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { status: prevStatus } = prevState;
    const { status } = this.state;

    if (prevStatus === statuses.EXPANDED && status === statuses.COLLAPSING) {
      requestAnimationFrame(() => {
        this.setState(
          {
            style: {
              overflow: "hidden",
              height: this.getChildHeight()
            }
          },
          () => {
            requestAnimationFrame(() => {
              this.setState({
                style: {
                  transition: "500ms height ease, 500ms transform ease",
                  overflow: "hidden",
                  height: "0"
                }
              });
            });
          }
        );
      });
    }

    if (prevStatus === statuses.COLLAPSING && status === statuses.EXPANDING) {
      requestAnimationFrame(() => {
        this.setState({
          style: {
            transition: "500ms height ease",
            overflow: "hidden",
            height: this.getChildHeight()
          }
        });
      });
    }

    if (prevStatus === statuses.EXPANDING && status === statuses.COLLAPSING) {
      requestAnimationFrame(() => {
        this.setState({
          style: {
            transition: "500ms height ease",
            overflow: "hidden",
            height: "0"
          }
        });
      });
    }
  }

  handleReady = () => {
    console.log("handleReady called");
    const { status } = this.state;

    if (status !== statuses.EXPANDING) return;

    requestAnimationFrame(() => {
      this.setState({
        style: {
          transition: "500ms height ease",
          overflow: "hidden",
          height: this.getChildHeight()
        }
      });
    });
  };

  handleTransitionEnd = event => {
    console.log("handleTransitionEnd called");

    if (event.target !== this.wrapper) return;

    const { status } = this.state;

    switch (status) {
      case statuses.COLLAPSING:
        this.setState({
          status: statuses.COLLAPSED,
          style: {
            transition: "",
            overflow: "hidden",
            height: "0"
          }
        });
        return;
      case statuses.EXPANDING:
        this.setState({
          status: statuses.EXPANDED,
          style: {
            transition: "",
            overflow: "",
            height: ""
          }
        });
        return;
      default:
        return;
    }
  };

  refWrapper = wrapper => {
    console.log("refWrapper called");
    this.wrapper = wrapper;
  };

  render() {
    const { children } = this.props;
    const { status, style } = this.state;
    const { handleReady, refWrapper } = this;

    return (
      <div
        onTransitionEnd={this.handleTransitionEnd}
        style={style}
        ref={refWrapper}
      >
        {status === statuses.COLLAPSED ? null : children({ handleReady })}
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
