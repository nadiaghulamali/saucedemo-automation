import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { HEADLESS, TIMEOUT } from './config';
import fs from 'fs';
import path from 'path';

Before({ timeout: TIMEOUT }, async function () {
  this.browser = await chromium.launch({ headless: HEADLESS, slowMo: 1000 });
  this.page = await this.browser.newPage();
  // set viewport for consistency
  await this.page.setViewportSize({ width: 1280, height: 800 });
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const dir = path.join('reports','screenshots');
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `failed-${Date.now()}.png`);
    if (this.page) await this.page.screenshot({ path: file, fullPage: true });
  }
  if (this.browser) await this.browser.close();
});
