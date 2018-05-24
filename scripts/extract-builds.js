const { extractArchive, handleError } = require("./_archive");

async function start() {
  console.log("Unpacking builds...");

  const archivePath = await extractArchive("builds.tar.gz");

  console.log(`Archive extracted: ${archivePath}`);
}

start().catch(handleError);
