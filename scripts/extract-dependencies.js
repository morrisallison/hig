const { extractArchive, handleError } = require("./_archive");

async function start() {
  console.log("Unpacking dependencies...");

  const archivePath = extractArchive("dependencies.tar.gz");

  console.log(`Archive extracted: ${archivePath}`);
}

start().catch(handleError);
