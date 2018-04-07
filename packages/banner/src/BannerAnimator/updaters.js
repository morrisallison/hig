import statuses from "./statuses";

import {
  getInnerWrapperCollapsedTransform,
  getInnerWrapperReset,
  getInnerWrapperTransition,
  getWrapperAlignItems,
  getWrapperCollapsedHeight,
  getWrapperExpandedHeight,
  getWrapperReset,
  getWrapperTransition
} from "./styles";

/** @typedef {import("./BannerAnimator").BannerAnimatorState} BannerAnimatorState */
/** @typedef {import("./BannerAnimator").BannerAnimatorProps} BannerAnimatorProps */
/** @typedef {function(BannerAnimatorState, BannerAnimatorProps): BannerAnimatorState} BannerAnimatorUpdater */

/** @type {BannerAnimatorUpdater} */
export function startExpand() {
  return { status: statuses.EXPANDING };
}

/** @type {BannerAnimatorUpdater} */
export function startCollapse() {
  return { status: statuses.COLLAPSING };
}

/** @type {BannerAnimatorUpdater} */
export function endExpand() {
  return {
    status: statuses.EXPANDED,
    wrapperStyle: getWrapperReset(),
    innerWrapperStyle: getInnerWrapperReset()
  };
}

/** @type {BannerAnimatorUpdater} */
export function endCollapse({ innerWrapper }, { isOverlay, placement }) {
  return {
    status: statuses.COLLAPSED,
    wrapperStyle: {
      display: "",
      alignItems: "",
      transition: "",
      overflow: "hidden",
      height: getWrapperCollapsedHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "",
      transition: "",
      transform: getInnerWrapperCollapsedTransform({
        isOverlay,
        innerWrapper,
        placement
      })
    }
  };
}

/** @type {BannerAnimatorUpdater} */
export function prepareCollapse({ innerWrapper }, { isOverlay, placement }) {
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ isOverlay, placement }),
      transition: "",
      overflow: "hidden",
      height: getWrapperExpandedHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "1",
      ...getInnerWrapperReset()
    }
  };
}

/** @type {BannerAnimatorUpdater} */
export function animateCollapse({ innerWrapper }, { isOverlay, placement }) {
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ isOverlay, placement }),
      transition: getWrapperTransition({ isOverlay }),
      overflow: "hidden",
      height: getWrapperCollapsedHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "1",
      transition: getInnerWrapperTransition({ isOverlay }),
      transform: getInnerWrapperCollapsedTransform({
        isOverlay,
        innerWrapper,
        placement
      })
    }
  };
}

/** @type {BannerAnimatorUpdater} */
export function animateExpand({ innerWrapper }, { isOverlay, placement }) {
  return {
    wrapperStyle: {
      display: "flex",
      alignItems: getWrapperAlignItems({ isOverlay, placement }),
      transition: getWrapperTransition({ isOverlay }),
      overflow: "hidden",
      height: getWrapperExpandedHeight({ isOverlay, innerWrapper })
    },
    innerWrapperStyle: {
      flex: "1",
      transition: getInnerWrapperTransition({ isOverlay }),
      transform: ""
    }
  };
}
