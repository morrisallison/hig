import React from "react";
import PropTypes from "prop-types";

import "./ProfileContentPresenter.scss";

export default function ProfileContentPresenter(props) {
  const { profileName, profileEmail, children } = props;
  return (
    <div className="hig__profile-flyout__content">
      <div className="hig__profile-flyout__content__name">{profileName}</div>
      <div className="hig__profile-flyout__content__email">{profileEmail}</div>
      {children}
    </div>
  );
}

ProfileContentPresenter.propTypes = {
  /** The displayed name */
  profileName: PropTypes.string,
  /** The displayed email */
  profileEmail: PropTypes.string,
  /** Profile actions */
  children: PropTypes.node
};
