// const semver = require("semver");
const readPkg = require("read-pkg");
const baseConfig = require("semantic-release-monorepo");

const packageName = readPkg.sync().name;

module.exports = {
  ...baseConfig,
  branch: "chore/semantic-release",
  tagFormat: `${packageName}@\${version}`,
  dryRun: true,
  noCi: true,
  debug: true,
  prepare: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
};
