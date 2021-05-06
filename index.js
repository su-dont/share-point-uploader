"use strict";

const core = require("@actions/core");
const fs = require("fs");
const spsave = require("spsave").spsave;

try {
  const coreOptions = {
    siteUrl: core.getInput(process.env.SP_URL),
  };

  const creds = {
    username: core.getInput(process.env.SP_USERNAME),
    password: core.getInput(process.env.SP_PASSWORD),
  };

  const fileOptions = {
    folder: core.getInput(process.env.SP_FOLDER),
    fileName: core.getInput(process.env.SP_FILE_NAME),
    fileContent: fs.readFileSync(core.getInput(process.env.FILE)),
  };

  spsave(coreOptions, creds, fileOptions).catch((error) => {
    core.setFailed(error.message);
  });
} catch (error) {
  core.setFailed(error.message);
}
