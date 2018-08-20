const React = require("react");
const renderer = require("react-test-renderer");

/**
 * @typedef {import("react-test-renderer").TestRendererOptions} Options
 */

/**
 * @typedef {Object} Case
 * @property {string} desc
 * @property {Object} [props]
 * @property {import("react").ReactElement} [subject]
 */

/** @type {Options} */
const defaultOptions = {
  createNodeMock(element) {
    return document.createElement(element.type);
  }
};

/**
 * @param {import("react").Component|null} Component
 * @param {Case[]} cases
 * @param {Options} [options]
 */
module.exports = function takeSnapshotsOf(Component, cases, options) {
  cases.forEach(({ desc, props, subject }) => {
    it(desc, () => {
      const rendererOptions = Object.assign({}, defaultOptions, options);
      const vDom = subject || React.createElement(Component, props);
      const tree = renderer.create(vDom, rendererOptions).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
};
