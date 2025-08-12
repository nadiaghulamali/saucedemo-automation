import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'expect';
import { BASE_URL, SEED } from '../support/config';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { pickRandomIndexes } from '../utils/random';

Given('I open the inventory page', async function () {
  await this.page.goto(BASE_URL + '/inventory.html');
});

Given('I login with username {string} and password {string}', async function (username: string, password: string) {
  const login = new LoginPage(this.page);
  await login.login(username, password);
  const inv = new InventoryPage(this.page);
  await inv.waitForSelector('.inventory_list');
});

When('I add 3 random items to the cart', async function () {
  const inv = new InventoryPage(this.page);
  const count = await inv.getItemsCount();
  const indexes = pickRandomIndexes(count, 3, SEED);
  this.selectedIndexes = indexes;
  this.selectedNames = [];
  for (const i of indexes) {
    const name = (await inv.getItemNameByIndex(i)) || '';
    this.selectedNames.push(name.trim());
    await inv.addItemByIndex(i);
  }
});

Then('the cart badge should show {string}', async function (expected: string) {
  const inv = new InventoryPage(this.page);
  const badge = await inv.getCartBadge();
  expect(badge).toBe(expected);
});

When('I proceed to checkout with {string} {string} {string}', { timeout: 20000 },async function (first: string, last: string, postal: string) {
  const inv = new InventoryPage(this.page);
  await inv.goToCart();
  const cart = new CartPage(this.page);
  await cart.proceedToCheckout();
  const checkout = new CheckoutPage(this.page);
  await checkout.fillInformation(first, last, postal);
  await checkout.finishCheckout();
});

Then('I should see the order complete message', async function () {
  const checkout = new CheckoutPage(this.page);
  const text = await checkout.getCompleteHeader();
  expect(text?.toLowerCase()).toContain('thank you');
});
