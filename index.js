const chokidar = require("chokidar");
const watcher = chokidar.watch(`watch`, {
  persistent: true,
  ignoreInitial: false,
  ignorePermissionErrors: true,
  awaitWriteFinish: true,
});

watcher.on("add", (filePath) => {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();
  console.log(`File created: ${filePath} in ${date} at ${time}`);
});
watcher.on("unlink", (filePath) => {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();
  console.log(`File deleted: ${filePath} in ${date} at ${time}`);
});
watcher.on("change", (filePath) => {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();
  console.log(`File modified: ${filePath} in ${date} at ${time}`);
});
