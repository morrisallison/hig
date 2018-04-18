import React from "react";

import Logo from "./Logo";

export default function LogoImage({ src, label, link, title }) {
  return (
    <Logo link={link} title={title} label={label}>
      <img alt={label} src={src} />
    </Logo>
  );
}
