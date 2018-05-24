const { createArchive } = require("./_archive");

async function start() {
  console.log("Archiving builds...");
  return createArchive(
    [
      "packages/react/lib/**/*",
      "packages/vanilla/lib/**/*",
      "packages/*/build/**/*"
    ],
    "builds.tar.gz"
  );
}

start().catch(error => {
  process.exit(1);
  console.error(error);
});
