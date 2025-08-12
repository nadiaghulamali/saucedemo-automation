import { BasePage } from './BasePage';
import { INVENTORY } from '../locators/inventory.locators';
import { Page } from 'playwright';

export class InventoryPage extends BasePage {
  constructor(page: Page) { super(page); }

  async getItemsCount() {
    return this.count(INVENTORY.itemContainer);
  }
  
  async addItemByIndex(index: number) {
    const items = this.page.locator(INVENTORY.itemContainer);
    const addBtn = items.nth(index).locator('button');
    await addBtn.click();
  }

  async getItemNameByIndex(index: number) {
    const items = this.page.locator(INVENTORY.itemContainer);
    return items.nth(index).locator(INVENTORY.itemName).textContent();
  }

  async getCartBadge() {
    const has = await this.page.locator(INVENTORY.cartBadge).count();
    if (has) return (await this.page.locator(INVENTORY.cartBadge).textContent())?.trim();
    return null;
  }

  async goToCart() {
    await this.click(INVENTORY.cartLink);
  }
}
