const { createArchive, handleError } = require("./_archive");

async function start() {
  console.log("Archiving dependencies...");

  const archivePath = await createArchive(
    [
      ".dependency-hash",
      "node_modules/!(@hig|hig-*)/**/*",
      "packages/*/node_modules/!(@hig|hig-*)/**/*"
    ],
    "dependencies.tar.gz"
  );

  console.log(`Archive written to: ${archivePath}`);
}

start().catch(handleError);
