/**
 * @todo Move into shared package to consolidate component types
 */

/** @type {Object.<string, string>} */
export const types = Object.freeze({
  PRIMARY: "primary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning"
});

/** @type {string[]} */
export const AVAILABLE_TYPES = Object.freeze(Object.values(types));
