"use strict";

const core = require("@actions/core");

try {
  const url = core.getInput("sp_url");
  console.log(`URL: ${url}`);
} catch (error) {
  core.setFailed(error.message);
}
