const archiver = require("archiver");
const fs = require("fs");
const mkdirpFn = require("mkdirp");
const path = require("path");
const tarPack = require("tar-pack");
const util = require("util");

const BASE_PATH = path.resolve(__dirname, "..");
const PACKAGE_DIR = path.join(BASE_PATH, "packages");
const ARCHIVES_DIR = path.join(BASE_PATH, ".archives");

const mkdirp = util.promisify(mkdirpFn);

function getArchivePath(archiveFilename) {
  return path.join(ARCHIVES_DIR, archiveFilename);
}

function createDeferred() {
  let resolve, reject;

  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return { promise, resolve, reject };
}

async function createArchive(fileGlobs, archiveFilename) {
  const archivePath = getArchivePath(archiveFilename);
  const archive = archiver("tar", { gzip: true });
  const writer = fs.createWriteStream(archivePath);
  const { promise, resolve, reject } = createDeferred();

  await mkdirp(ARCHIVES_DIR);
  archive.pipe(writer);
  writer.on("close", () => resolve(archivePath));
  archive.on("error", reject);
  writer.on("error", reject);
  fileGlobs.forEach(pattern => archive.glob(pattern));
  archive.finalize();

  return promise;
}

async function extractArchive(archiveFilename) {
  const archivePath = getArchivePath(archiveFilename);
  const reader = fs.createReadStream(archivePath);
  const { promise, resolve, reject } = createDeferred();
  const unpackOptions = { strip: 0, keepFiles: true };
  const writer = tarPack.unpack(BASE_PATH, unpackOptions, error => {
    if (error) {
      reject(error);
    } else {
      resolve(archivePath);
    }
  });

  reader.on("error", reject);
  writer.on("error", reject);
  reader.pipe(writer);

  return promise;
}

function handleError(error) {
  console.error(error);
  process.exit(1);
}

module.exports = { createArchive, extractArchive, handleError };
