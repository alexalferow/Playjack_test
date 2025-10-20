import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://playjack.com",
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/commands.js",
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});
