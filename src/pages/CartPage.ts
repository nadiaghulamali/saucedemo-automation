import { BasePage } from './BasePage';
import { CART } from '../locators/cart.locators';
import { Page } from 'playwright';

export class CartPage extends BasePage {
  constructor(page: Page) { super(page); }

  async getCartItemsCount() {
    return this.count(CART.cartItem);
  }

  async proceedToCheckout() {
    await this.click(CART.checkoutBtn);
  }

  async getItemNames() {
    const items = this.page.locator(CART.cartItem);
    const count = await items.count();
    const names = [];
    for (let i=0;i<count;i++) {
      names.push((await items.nth(i).locator(CART.itemName).textContent())?.trim());
    }
    return names;
  }
}
