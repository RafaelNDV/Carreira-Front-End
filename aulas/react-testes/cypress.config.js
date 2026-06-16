import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '6pn9tf',
  allowCypressEnv: false,

  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
