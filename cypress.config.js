const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'nk9c28',
  e2e: {
    baseUrl: 'https://www.amazon.com.br/',
    viewportWidth: 1440, // Default viewport width
    viewportHeight: 990, // Default viewport height
    defaultCommandTimeout: 10000, // Default command timeout in milliseconds
    chromeWebSecurity: false, // Disable Chrome's web security for testing external content
    setupNodeEvents(on, config) {},
  },
});
