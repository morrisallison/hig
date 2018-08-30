/** @typedef {import("./getCoordinates").Coordinates} Coordinates */

/**
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function offsetContainerVertical(coordinates, diff) {
  return {
    ...coordinates,
    container: {
      ...coordinates.container,
      top: coordinates.container.top + diff
    }
  };
}

/**
 * @param {Coordinates} coordinates
 * @param {number} diff
 * @returns {Coordinates}
 */
export function offsetPanelHorizontal(coordinates, diff) {
  return {
    ...coordinates,
    pointerPosition: {
      ...coordinates.pointerPosition,
      left: coordinates.pointerPosition.left - diff
    },
    container: {
      ...coordinates.container,
      left: coordinates.container.left + diff
    }
  };
}
