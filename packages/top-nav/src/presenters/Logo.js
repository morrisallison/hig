import React from "react";

export default function Logo({
  label,
  link,
  title,
  onClick,
  children,
  dangerouslySetInnerHTML
}) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      className="hig__top-nav__logo"
      href={link}
      title={title}
      aria-label={label}
      onClick={onClick}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Wrapper>
  );
}
