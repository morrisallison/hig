import { placement, placements } from "../placements";
import statuses from "./statuses";

const TRANSITION_DURATION = 300;
const OVERLAY_HEIGHT_BUFFER = 50;

const easeOutBack = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";

const wrapperStyleReset = {
  flex: "",
  alignItems: "",
  transition: "",
  overflow: "",
  height: ""
};

const innerWrapperStyleReset = {
  flex: "",
  transition: "",
  transform: ""
};

function getWrapperTransition({ isOverlay }) {
  return isOverlay ? "" : `${TRANSITION_DURATION}ms height ease`;
}

function getInnerWrapperTransition({ isOverlay }) {
  return isOverlay ? `${TRANSITION_DURATION}ms transform ${easeOutBack}` : "";
}

function getOverlayWrapperHeight({ innerWrapper }) {
  return innerWrapper.offsetHeight + OVERLAY_HEIGHT_BUFFER;
}

function getExpandedWrapperHeight({ isOverlay, innerWrapper }) {
  const wrapperHeight = isOverlay
    ? getOverlayWrapperHeight({ innerWrapper })
    : innerWrapper.offsetHeight;

  return `${wrapperHeight}px`;
}

function getCollapsedWrapperHeight({ isOverlay, innerWrapper }) {
  if (!isOverlay) return "0";

  const wrapperHeight = getOverlayWrapperHeight({ innerWrapper });

  return `${wrapperHeight}px`;
}

function getWrapperAlignItems({ isOverlay, placement }) {
  const isBottomPlacement = placement === placements.BOTTOM;

  if (isOverlay) {
    return isBottomPlacement ? "flex-end" : "flex-start";
  }

  return isBottomPlacement ? "flex-start" : "flex-end";
}

function getCollapsedInnerTransform({ isOverlay, innerWrapper, placement }) {
  if (!isOverlay) return "";

  const isBottomPlacement = placement === placements.BOTTOM;
  const modifier = isBottomPlacement ? 1 : -1;
  const offset = isBottomPlacement ? OVERLAY_HEIGHT_BUFFER : 0;
  const innerWrapperOffset = innerWrapper.offsetHeight * modifier + offset;

  return `translateY(${innerWrapperOffset}px)`;
}

export function startExpand() {
  return { status: statuses.EXPANDING };
}

export function startCollapse() {
  return { status: statuses.COLLAPSING };
}

export function endExpand() {
  return {
    status: statuses.EXPANDED,
    wrapperStyle: wrapperStyleReset,
    innerWrapperStyle: innerWrapperStyleReset
  };
}

export function endCollapse({ innerWrapper }, { isOverlay, placement }) {
  return {
    status: statuses.COLLAPSED,
    wrapperStyle: {
      display: "",
      alignItems: "",
      transition: "",
      overflow: "hidden",
      height: getCollapsedWrapperHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "",
      transition: "",
      transform: getCollapsedInnerTransform({
        isOverlay,
        innerWrapper,
        placement
      })
    }
  };
}

export function prepareCollapse({ innerWrapper }, { isOverlay, placement }) {
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ isOverlay, placement }),
      transition: "",
      overflow: "hidden",
      height: getExpandedWrapperHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "1",
      ...innerWrapperStyleReset
    }
  };
}

export function animateCollapse({ innerWrapper }, { isOverlay, placement }) {
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ isOverlay, placement }),
      transition: getWrapperTransition({ isOverlay }),
      overflow: "hidden",
      height: getCollapsedWrapperHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "1",
      transition: getInnerWrapperTransition({ isOverlay }),
      transform: getCollapsedInnerTransform({
        isOverlay,
        innerWrapper,
        placement
      })
    }
  };
}

export function animateExpand({ innerWrapper }, { isOverlay, placement }) {
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ isOverlay, placement }),
      transition: getWrapperTransition({ isOverlay }),
      overflow: "hidden",
      height: getExpandedWrapperHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "1",
      transition: getInnerWrapperTransition({ isOverlay }),
      transform: ""
    }
  };
}
