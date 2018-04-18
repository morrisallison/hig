import React from "react";

export default function ProfileContent({ name, email, children }) {
  return (
    <div className="hig__top-nav__profile-flyout-content">
      <div className="hig__top-nav__profile-flyout-content__name">{name}</div>
      <div className="hig__top-nav__profile-flyout-content__email">{email}</div>
      <div className="hig__top-nav__profile-flyout-content__links">
        {children}
      </div>
    </div>
  );
}
