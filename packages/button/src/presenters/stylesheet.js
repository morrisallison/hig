import { types, widths, sizes } from "../constants";

function getButtonDefaultButtonRules(themeData) {
  return {
    borderWidth: themeData["button.borderWidth"],
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: themeData["button.borderRadius"],
    boxSizing: "border-box",
    color: themeData["colorScheme.textColor"],
    cursor: "pointer",
    display: "inline-block",
    fontFamily: themeData["button.fontFamily"],
    fontSize: themeData["button.fontSize"],
    fontWeight: themeData["button.fontWeight"],
    lineHeight: themeData["button.lineHeight"],
    margin: "0",
    overflow: "hidden",
    textAlign: "center",
    textDecoration: "none",
    textOverflow: "ellipsis",
    userSelect: "none",
    whiteSpace: "nowrap",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased"
  };
}

function getButtonRulesByType(type, themeData) {
  switch (type) {
    case types.PRIMARY: {
      const textColor = themeData["button.solid.textColor"];

      return {
        background: themeData["button.solid.backgroundColor"],
        color: textColor,
        "&:visited": {
          color: textColor
        },
        "svg *": {
          fill: textColor
        }
      };
    }
    case types.SECONDARY: {
      const textColor = themeData["button.outline.textColor"];
      const borderColor =
        type === types.FLAT
          ? "transparent"
          : themeData["button.outline.borderColor"];

      return {
        background: "none",
        borderColor,
        color: textColor,
        "&:visited": {
          color: textColor
        },
        "svg *": {
          fill: textColor
        }
      };
    }
    default:
      return {};
  }
}

function getButtonRulesByDisabled(disabled) {
  return disabled ? { pointerEvents: "none" } : {};
}

function getButtonRulesBySize(size, themeData) {
  switch (size) {
    case sizes.SMALL:
      return {
        fontSize: "12px",
        fontWeight: "700",
        height: "28px",
        lineHeight: "26px",
        minWidth: "66px",
        padding: "0 16px"
      };
    case sizes.STANDARD:
      return {
        fontSize: "14px",
        fontWeight: "700",
        height: "36px",
        lineHeight: "34px",
        minWidth: "68px",
        padding: "0 16px"
      };
    case sizes.LARGE:
      return {
        fontSize: "16px",
        fontWeight: "700",
        height: "42px",
        lineHeight: "40px",
        minWidth: "90px",
        padding: "0 24px"
      };
    default:
      return {};
  }
}

function getButtonRulesByWidth(width) {
  return width === widths.GROW ? { width: "100%" } : {};
}

function getButtonHoverRulesByType(type, themeData) {
  switch (type) {
    case types.PRIMARY:
      return {
        backgroundColor: "color(hig-blue-40)"
      };
    case types.SECONDARY:
    case types.FLAT:
      return {
        background: "none",
        borderColor: "color(hig-turquoise-50)"
      };
    default:
      return {};
  }
}

function getButtonFocusRulesByType(type, themeData) {
  switch (type) {
    case types.PRIMARY:
      return {
        backgroundColor: "color(hig-blue-60)"
      };
    case types.SECONDARY:
    case types.FLAT:
      return {
        color: "#fff",
        background: "color(hig-turquoise-40)",
        borderColor: "color(hig-turquoise-40)",
        "svg *": {
          fill: "#fff"
        }
      };
    default:
      return {};
  }
}

function getButtonPressedRulesByType(type, themeData) {
  switch (type) {
    case types.PRIMARY:
      return {
        backgroundColor: "color(hig-blue-60)"
      };
    case types.SECONDARY:
    case types.FLAT:
      return {
        color: "#fff",
        background: "color(hig-turquoise-40)",
        borderColor: "color(hig-turquoise-40)",
        "svg *": {
          fill: "#fff"
        }
      };
    default:
      return {};
  }
}

function getButtonDisabledRulesByType(type, themeData) {
  switch (type) {
    case types.PRIMARY:
      return {
        background: "color(hig-blue-20)"
      };
    case types.SECONDARY:
      return {};
    case types.FLAT:
      return {
        background: "none",
        borderColor: "transparent",
        color: "color(hig-cool-gray-30)"
      };
    default:
      return {};
  }
}

export default function stylesheet(props, themeData) {
  const { disabled, hasFocus, hasHover, pressed, size, type, width } = props;
  console.log(Object.keys(themeData));
  return {
    button: {
      ...getButtonDefaultButtonRules(themeData),
      ...getButtonRulesByType(type, themeData),
      ...(hasFocus || pressed ? { outline: "none", boxShadow: "none" } : {}),
      ...getButtonRulesByDisabled(disabled),
      ...(hasHover ? getButtonHoverRulesByType(type, themeData) : {}),
      ...(hasFocus ? getButtonFocusRulesByType(type, themeData) : {}),
      ...(pressed ? getButtonPressedRulesByType(type, themeData) : {}),
      ...(disabled ? getButtonDisabledRulesByType(type, themeData) : {}),
      ...getButtonRulesBySize(size, themeData),
      ...getButtonRulesByWidth(width)
    },
    icon: {
      display: "inline-block",
      position: "relative",
      top: "-1px",
      height: "24px",
      verticalAlign: "middle",
      marginRight: "5px",
      marginBottom: "1px"
    }
  };
}
