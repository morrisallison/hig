import React, { Component } from "react";

export default class TopNav extends Component {
  render() {
    const { leftActions, rightActions, logo } = this.props;

    return (
      <div className="hig__top-nav">
        {leftActions}
        <div className="hig__top-nav__item">
          <div className="hig__top-nav__logo-wrapper">{logo}</div>
        </div>
        <div className="hig__top-nav__spacer" />
        {rightActions}
      </div>
    );
  }
}
