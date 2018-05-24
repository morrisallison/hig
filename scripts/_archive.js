const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const tarPack = require("tar-pack");

const BASE_PATH = path.resolve(__dirname, "..");
const PACKAGE_DIR = path.resolve(BASE_PATH, "packages");
const ARCHIVES_DIR = path.resolve(BASE_PATH, ".archives");

function getArchivePath(archiveFilename) {
  return path.join(ARCHIVES_DIR, archiveFilename);
}

async function createArchive(fileGlobs, archiveFilename) {
  const archivePath = getArchivePath(archiveFilename);
  const archive = archiver("tar", { gzip: true });
  const writer = fs.createWriteStream(archivePath);

  mkdirp.sync(ARCHIVES_DIR);
  fileGlobs.forEach(pattern => archive.glob(pattern));
  archive.pipe(writer);
  archive.finalize();

  await new Promise((resolve, reject) => {
    writer.on("end", resolve);
    archive.on("error", reject);
    writer.on("error", reject);
  });

  console.log(`Archive written to: ${archivePath}`);
}

async function extractArchive(archiveFilename) {
  const archivePath = getArchivePath(archiveFilename);
  const reader = fs.createReadStream(archivePath);
  const writer = tarPack.unpack(BASE_PATH, { strip: 0, keepFiles: true });

  reader.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("end", resolve);
    reader.on("error", reject);
    writer.on("error", reject);
  });
}

module.exports = { createArchive, extractArchive };
