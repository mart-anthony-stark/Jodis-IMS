const { exec } = require("child_process");

try {
  exec("npm start");
} catch (e) {
  console.log(e);
}
