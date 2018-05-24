const { extractArchive } = require("./_archive");

async function start() {
  console.log("Unpacking dependencies...");

  return extractArchive("dependencies.tar.gz");
}

start().catch(error => {
  process.exit(1);
  console.error(error);
});
