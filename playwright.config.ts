import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: [["html", { outputFolder: "e2e/playwright-report" }]],
  outputDir: "e2e/test-results/",
  webServer: {
    command: "npm run build && npm run start",
    port: 3000,
  },

  use: {
    actionTimeout: 0,
    baseURL: "http://localhost:3000",
    trace: "on",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "chromium-mobile",
      use: {
        ...devices["Pixel 5"],
      },
    },
    {
      name: "webkit-mobile",
      use: {
        ...devices["iPhone 12"],
      },
    },
  ],
};

export default config;
