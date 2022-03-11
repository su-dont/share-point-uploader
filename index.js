"use strict";

const core = require("@actions/core");
const fs = require("fs");
const spsave = require("spsave").spsave;
const execSync = require("child_process").execSync;

try {
  const coreOptions = {
    siteUrl: process.env.SP_URL,
  };

  const creds = {
    username: process.env.SP_USERNAME,
    password: process.env.SP_PASSWORD,
  };

  console.log("process.env.GITHUB_WORKSPACE: " + process.env.GITHUB_WORKSPACE);

  let output = execSync("ls -al ..", { encoding: "utf-8" }); // the default is 'buffer'
  console.log("Output was:\n", output);

  output = execSync("ls ../../", { encoding: "utf-8" }); // the default is 'buffer'
  console.log("2 up was:\n", output);

  output = execSync("ls ../file_commands", { encoding: "utf-8" }); // the default is 'buffer'
  console.log("file_commands was:\n", output);

  const fileOptions = {
    folder: process.env.SP_FOLDER,
    fileName: process.env.SP_FILE_NAME,
    fileContent: fs.readFileSync(
      `${process.env.GITHUB_WORKSPACE}/${process.env.FILE}`
    ),
  };

  spsave(coreOptions, creds, fileOptions).catch((error) => {
    core.setFailed(error.message);
  });
} catch (error) {
  core.setFailed(error.message);
}
