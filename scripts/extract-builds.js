const { extractArchive } = require("./_archive");

async function start() {
  console.log("Unpacking builds...");
  return extractArchive("builds.tar.gz");
}

start().catch(error => {
  process.exit(1);
  console.error(error);
});
