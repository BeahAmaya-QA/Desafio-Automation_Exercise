const { defineConfig } = require("cypress");
const { findDownloadFile } = require('./cypress/plugins/file-tasks');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920, 
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com/",
    downloadsFolder: "cypress/downloads",

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());

      on('task', {
        findDownloadFile,
      });
      return config;
    },
  },
});
