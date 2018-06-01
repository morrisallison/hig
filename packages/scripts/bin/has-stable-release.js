#! /usr/bin/env node
const execa = require("execa");
const readPkg = require("read-pkg");
const semver = require("semver");

const { name: packageName } = readPkg.sync();

async function getReleaseVersions() {
  return (await execa.stdout("git", ["tag"]))
    .split("\n")
    .map(tag => tag.trim())
    .filter(tag => tag.startsWith(packageName))
    .map(tag => tag.split("@").pop());
}

function isStableVersion(version) {
  return !semver.prerelease(semver.clean(version));
}

async function hasStableRelease() {
  const versions = await getReleaseVersions();

  return Boolean(versions.find(isStableVersion));
}

async function start() {
  if (await hasStableRelease()) {
    process.exit(0);
  }

  console.log(`${packageName} doesn't have a stable version release.`);
  process.exit(1);
}

start();
