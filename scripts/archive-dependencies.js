const { createArchive } = require("./_archive");

async function start() {
  console.log("Archiving dependencies...");
  return createArchive(
    [".dependency-hash", "node_modules/**/*", "packages/*/node_modules/**/*"],
    "dependencies.tar.gz"
  );
}

start().catch(error => {
  process.exit(1);
  console.error(error);
});
