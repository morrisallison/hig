import React from "react";
import PropTypes from "prop-types";

export default function PointerPresenter(props) {
  const { backgroundColor, borderColor, borderWidth, size } = props;
  const height = size / 2;
  const width = size;
  const widthMidpoint = width / 2;

  return (
    <svg height={size} width={width} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        fill={borderColor}
        points={[
          `0,${height}`,
          `${widthMidpoint},0`,
          `${width},${height}`
        ].join(" ")}
      />
      <polygon
        fill={backgroundColor}
        points={[
          `${borderWidth},${height}`,
          `${widthMidpoint},${borderWidth}`,
          `${width - borderWidth},${height}`
        ].join(" ")}
      />
    </svg>
  );
}

PointerPresenter.defaultProps = {
  // hig-white
  backgroundColor: "#fff",
  // hig-cool-gray-20
  borderColor: "#d4dbe1",
  borderWidth: 2.5,
  height: 12,
  width: 24
};

PointerPresenter.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  size: PropTypes.number
};
