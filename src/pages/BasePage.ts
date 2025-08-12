import { Page } from 'playwright';

export class BasePage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, text: string) {
    await this.page.locator(selector).fill(text);
  }

  async text(selector: string) {
    return this.page.locator(selector).textContent();
  }

  async count(selector: string) {
    return this.page.locator(selector).count();
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
