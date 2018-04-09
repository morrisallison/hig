import { placement, placements } from "../placements";
import statuses from "./statuses";

const TRANSITION_DURATION = 500;

const wrapperStyleReset = {
  flex: "",
  alignItems: "",
  transition: "",
  overflow: "",
  height: ""
};

const innerWrapperStyleReset = {
  // transition: "",
  // transform: ""
};

const wrapperBase = {
  display: "flex",
  alignItems: "flex-end"
};

function wrapperTransition() {
  console.log("wrapperTransition called");
  return `${TRANSITION_DURATION}ms height ease`;
}

function innerWrapperTransition() {
  console.log("innerWrapperTransition called");
  return `${TRANSITION_DURATION}ms transform ease`;
}

function getExpandedWrapperHeight({ innerWrapper }) {
  console.log("getExpandedWrapperHeight called");
  const innerWrapperHeight = innerWrapper.offsetHeight;

  return `${innerWrapperHeight}px`;
}

function getWrapperAlignItems({ placement }) {
  return placement === placements.BOTTOM ? "flex-start" : "flex-end";
}

function getCollapsedInnerTransform({ innerWrapper, placement }) {
  console.log({ placement });
  console.log("getCollapsedInnerTransform called");
  const modifier = placement === placements.BOTTOM ? 1 : -1;
  const innerWrapperOffset = innerWrapper.offsetHeight * modifier;

  return `translateY(${innerWrapperOffset}px)`;
}

export function startExpand() {
  console.log("startExpand called");
  return { status: statuses.EXPANDING };
}

export function startCollapse() {
  console.log("startCollapse called");
  return { status: statuses.COLLAPSING };
}

export function endExpand() {
  console.log("endExpand called");
  return {
    status: statuses.EXPANDED,
    wrapperStyle: wrapperStyleReset,
    innerWrapperStyle: innerWrapperStyleReset
  };
}

export function endCollapse({ innerWrapper }, { placement }) {
  console.log("endCollapse called");
  return {
    status: statuses.COLLAPSED,
    wrapperStyle: {
      display: "",
      alignItems: "",
      transition: "",
      overflow: "hidden",
      height: "0"
    },
    innerWrapperStyle: {
      // transition: "",
      // transform: getCollapsedInnerTransform({ innerWrapper, placement })
    }
  };
}

export function prepareCollapse({ innerWrapper }, { placement }) {
  console.log("prepareCollapse called");
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ placement }),
      transition: "",
      overflow: "hidden",
      height: getExpandedWrapperHeight({ innerWrapper })
    },
    innerWrapperStyle: innerWrapperStyleReset
  };
}

export function animateCollapse({ innerWrapper }, { placement }) {
  console.log("animateCollapse called");
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ placement }),
      transition: wrapperTransition(),
      overflow: "hidden",
      height: "0"
    },
    innerWrapperStyle: {
      // transition: innerWrapperTransition(),
      // transform: getCollapsedInnerTransform({ innerWrapper, placement })
    }
  };
}

export function animateExpand({ innerWrapper }) {
  console.log("animateExpand called");
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ placement }),
      transition: wrapperTransition(),
      overflow: "hidden",
      height: getExpandedWrapperHeight({ innerWrapper })
    },
    innerWrapperStyle: {
      // transition: innerWrapperTransition(),
      // transform: ""
    }
  };
}
