import React from "react";

export default function Logo({ label, link, title, children }) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      className="hig__top-nav__logo"
      href={link || undefined}
      title={title}
      aria-label={label}
    >
      {children}
    </Wrapper>
  );
}
