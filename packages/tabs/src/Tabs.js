import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";

import { availableAlignments } from "./alignments";
import TabsPresenter from "./presenters/TabsPresenter";
import Tab from "./Tab";

const FIRST_TAB_INDEX = 0;

/**
 * @typedef {Object} Tab
 * @property {string} key
 * @property {import("./tab").TabProps} props
 */

/**
 * @typedef {Object} TabsProps
 * @property {string} [align]
 * @property {ReactNode} [children]
 */

/**
 * @typedef {Object} TabsState
 * @property {number} activeTabIndex
 */

/**
 * @param {ReactNode} children
 * @returns {Tab[]}
 * @see ./Tab.js
 */
function createTabs(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { type, key, props } = child;

    if (type === Tab) {
      result.push({ key, props });
    }

    return result;
  }, []);
}

class Tabs extends Component {
  static propTypes = {
    align: PropTypes.oneOf(availableAlignments),
    children: PropTypes.node
  };

  /**
   * @param {TabsProps} nextProps
   * @param {TabsState} prevState
   * @returns {TabsState | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { children } = nextProps;
    const nextTabs = createTabs(children);
    const nextActiveTabIndex = nextTabs.findIndex(({ active }) => active);
    const { activeTabIndex: prevActiveTabIndex } = prevState;

    if (
      // If no active tab was declared
      nextActiveTabIndex < 0 ||
      // If the declared active tab is the same as the current active tab
      nextActiveTabIndex === prevActiveTabIndex
    ) {
      return null;
    }

    return {
      activeTabIndex: nextActiveTabIndex
    };
  }

  /** @type {TabsState} */
  state = {
    activeTabIndex: FIRST_TAB_INDEX
  };

  /** @returns {Tab[]} */
  getTabs() {
    return createTabs(this.props.children);
  }

  /** @returns {Tab} */
  getActiveTab() {
    const { activeTabIndex } = this.state;

    return this.getTabs()[activeTabIndex];
  }

  /**
   * @param {number} index
   */
  setActiveTab(index) {
    this.setState({
      activeTabIndex: index
    });
  }

  /**
   * @param {number} index
   * @returns {Function}
   */
  createTabClickHandler(index) {
    return () => {
      this.setActiveTab(index);
    };
  }

  /**
   * @param {Tab} tab
   * @param {number} index
   * @returns {JSX.Element}
   */
  renderTab = ({ key, props }, index) => {
    const { render, label } = props;
    const { activeTabIndex } = this.state;

    return render({
      key,
      label,
      active: activeTabIndex === index,
      onClick: this.createTabClickHandler(index)
    });
  };

  /**
   * @returns {JSX.Element[]}
   */
  renderTabs() {
    return this.getTabs().map(this.renderTab);
  }

  /** @returns {ReactNode} */
  renderContent() {
    const activeTab = this.getActiveTab();

    return activeTab ? activeTab.children : null;
  }

  render() {
    return (
      <TabsPresenter align={this.props.align}>
        <div>{this.renderTabs()}</div>
        {this.renderContent()}
      </TabsPresenter>
    );
  }
}

export default polyfill(Tabs);
