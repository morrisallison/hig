import { placements } from "../placements";

const EASE_OUT_BACK = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
const OVERLAY_HEIGHT_BUFFER = 50;
const TRANSITION_DURATION = 300;

/**
 * @param {Object} params
 * @param {HTMLDivElement} params.innerWrapper
 * @returns {number}
 */
function getWrapperOverlayHeight({ innerWrapper }) {
  return innerWrapper.offsetHeight + OVERLAY_HEIGHT_BUFFER;
}

/** @returns {Object.<string, string>} */
export function getWrapperReset() {
  return {
    flex: "",
    alignItems: "",
    transition: "",
    overflow: "",
    height: ""
  };
}

/** @returns {Object.<string, string>} */
export function getInnerWrapperReset() {
  return {
    flex: "",
    transition: "",
    transform: ""
  };
}

/**
 * @param {Object} params
 * @param {boolean} params.isOverlay
 * @returns {string}
 */
export function getWrapperTransition({ isOverlay }) {
  return isOverlay ? "" : `${TRANSITION_DURATION}ms height ease`;
}

/**
 * @param {Object} params
 * @param {boolean} params.isOverlay
 * @returns {string}
 */
export function getInnerWrapperTransition({ isOverlay }) {
  return isOverlay ? `${TRANSITION_DURATION}ms transform ${EASE_OUT_BACK}` : "";
}

/**
 * @param {Object} params
 * @param {boolean} params.isOverlay
 * @param {HTMLDivElement} params.innerWrapper
 * @returns {string}
 */
export function getWrapperExpandedHeight({ isOverlay, innerWrapper }) {
  const wrapperHeight = isOverlay
    ? getWrapperOverlayHeight({ innerWrapper })
    : innerWrapper.offsetHeight;

  return `${wrapperHeight}px`;
}

/**
 * @param {Object} params
 * @param {boolean} params.isOverlay
 * @param {HTMLDivElement} params.innerWrapper
 * @returns {string}
 */
export function getWrapperCollapsedHeight({ isOverlay, innerWrapper }) {
  if (!isOverlay) return "0";

  const wrapperHeight = getWrapperOverlayHeight({ innerWrapper });

  return `${wrapperHeight}px`;
}

/**
 * @param {Object} params
 * @param {boolean} params.isOverlay
 * @param {string} params.placement
 * @returns {string}
 */
export function getWrapperAlignItems({ isOverlay, placement }) {
  const isBottomPlacement = placement === placements.BOTTOM;

  if (isOverlay) {
    return isBottomPlacement ? "flex-end" : "flex-start";
  }

  return isBottomPlacement ? "flex-start" : "flex-end";
}

/**
 * @param {Object} params
 * @param {boolean} params.isOverlay
 * @param {HTMLDivElement} params.innerWrapper
 * @param {string} params.placement
 * @returns {string}
 */
export function getInnerWrapperCollapsedTransform({
  isOverlay,
  innerWrapper,
  placement
}) {
  if (!isOverlay) return "";

  const isBottomPlacement = placement === placements.BOTTOM;
  const modifier = isBottomPlacement ? 1 : -1;
  const offset = isBottomPlacement ? OVERLAY_HEIGHT_BUFFER : 0;
  const innerWrapperOffset = innerWrapper.offsetHeight * modifier + offset;

  return `translateY(${innerWrapperOffset}px)`;
}
