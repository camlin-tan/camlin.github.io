import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: process.env.TEST_URL || 'http://127.0.0.1:4321/camlin.github.io/',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    channel: process.env.CI ? undefined : 'msedge',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: 'npm run dev',
    url: process.env.TEST_URL || 'http://127.0.0.1:4321/camlin.github.io/',
    reuseExistingServer: !process.env.CI,
    env: { ASTRO_TELEMETRY_DISABLED: '1' },
  },
});
