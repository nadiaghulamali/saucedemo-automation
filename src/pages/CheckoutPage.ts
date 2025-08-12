import { BasePage } from './BasePage';
import { CHECKOUT } from '../locators/checkout.locators';
import { Page } from 'playwright';

export class CheckoutPage extends BasePage {
  constructor(page: Page) { super(page); }

  async fillInformation(firstName: string, lastName: string, postal: string) {
    await this.fill(CHECKOUT.firstName, firstName);
    await this.fill(CHECKOUT.lastName, lastName);
    await this.fill(CHECKOUT.postalCode, postal);
    await this.click(CHECKOUT.continueBtn);
  }

  async finishCheckout() {
    await this.click(CHECKOUT.finishBtn);
  }

  async getCompleteHeader() {
    return (await this.text(CHECKOUT.completeHeader))?.trim();
  }
}
