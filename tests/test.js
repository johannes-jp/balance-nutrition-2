import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});

test('viewport screenshot', async ({page}) => {
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'viewport_screenshot.png', fullPage: false });
});

test('rolling screenshot', async ({page}) => {
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'rolling_screenshot.png', fullPage: true });
});
