const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1100,
  viewportHeight: 660,
  e2e: {
    baseUrl: "https://demoqa.com",
    testIsolation: false,
    specPattern: 'cypress/test/**/*.cy.{js,jsx,ts,tsx}',  // Buscar en cualquier subdirectorio de 'cypress/'
    setupNodeEvents(on, config) {
      // Implementar eventos de nodo aquí
    },
  },
});
