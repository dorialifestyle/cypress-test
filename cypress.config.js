const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    video: true,
    videosFolder: "cypress/videos",
    videoCompression: 32,
    defaultCommandTimeout: 8000
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true
  },
  env: {
    grepFilterSpecs: true
  }
});
