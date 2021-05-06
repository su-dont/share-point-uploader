"use strict";

const core = require("@actions/core");
const fs = require("fs");
const spsave = require("spsave").spsave;

try {
  const coreOptions = {
    siteUrl: core.getInput("sp_url"),
  };

  const creds = {
    username: core.getInput("sp_username"),
    password: core.getInput("sp_password"),
  };

  const fileOptions = {
    folder: core.getInput("sp_folder"),
    fileName: core.getInput("sp_file_name"),
    fileContent: fs.readFileSync(core.getInput("file")),
  };

  spsave(coreOptions, creds, fileOptions).catch((error) => {
    core.setFailed(error.message);
  });
} catch (error) {
  core.setFailed(error.message);
}
