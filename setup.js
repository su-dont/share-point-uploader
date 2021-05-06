const { exec } = require("child_process");
exec("npm install", (error, stdout, stderr) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});
