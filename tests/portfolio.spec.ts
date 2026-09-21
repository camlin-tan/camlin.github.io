import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('portfolio renders correctly and the résumé PDF is not accessible', async ({ page, request }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Thoughtful code.');
  await expect(page.locator('.project-card')).toHaveCount(4);
  await expect(page.locator('.experience-item')).toHaveCount(3);
  await expect(page.locator('.availability')).toHaveText('Available from January 2027');
  await expect(page.locator('.project-quant .status-tag')).toHaveText('In progress');
  await expect(page.locator('a[href$=".pdf"]')).toHaveCount(0);
  const resume = await request.get('camlin-tan-resume.pdf');
  expect(resume.status()).toBe(404);
  await page.evaluate(() => document.fonts.ready);
  expect(errors).toEqual([]);
});

test('theme preference persists and both themes pass accessibility checks', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.evaluate(() => document.fonts.ready);
  const dark = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(dark.violations).toEqual([]);
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  const light = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(light.violations).toEqual([]);
});

test('project details are keyboard accessible and label the unfinished work', async ({ page }) => {
  await page.goto('./');
  const disclosure = page.locator('.project-quant summary');
  await disclosure.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.project-quant details')).toHaveAttribute('open', '');
  await expect(page.locator('.project-quant .project-details-body')).toContainText('Planned pipeline');
  await page.keyboard.press('Enter');
  await expect(page.locator('.project-quant details')).not.toHaveAttribute('open', '');
});

test('section navigation works and the mobile menu closes predictably', async ({ page, isMobile }) => {
  await page.goto('./');
  if (isMobile) {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await expect(page.getByRole('navigation')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused();
    await page.getByRole('button', { name: 'Open navigation' }).click();
  }
  await page.getByRole('navigation').getByRole('link', { name: 'Experience', exact: true }).click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator('.main-nav a[href="#experience"]')).toHaveAttribute('aria-current', 'location');
  if (isMobile) await expect(page.getByRole('navigation')).toBeHidden();
});

test('email can be copied and failures have an accessible fallback', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('./');
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await expect(page.getByRole('status')).toHaveText('Email copied!');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('camlin.tan@gmail.com');
  await page.evaluate(() => { Object.defineProperty(navigator.clipboard, 'writeText', { value: () => Promise.reject(new Error('Permission denied')) }); });
  await page.locator('.copy-email').click();
  await expect(page.getByRole('status')).toHaveText('Please select the email address to copy it.');
});

test('content and navigation remain usable without JavaScript', async ({ browser, isMobile, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: isMobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Thoughtful code.');
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.locator('.project-rag summary').click();
  await expect(page.locator('.project-rag details')).toHaveAttribute('open', '');
  await context.close();
});

test('narrow layouts do not scroll horizontally and reduced motion is respected', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, viewport: window.innerWidth }));
    expect(dimensions.scroll, `overflow at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
  }
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});
