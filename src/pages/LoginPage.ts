import { BasePage } from './BasePage';
import { LOGIN } from '../locators/login.locators';
import { Page } from 'playwright';


export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.fill(LOGIN.username, username);
    await this.fill(LOGIN.password, password);
    await this.click(LOGIN.loginBtn);
  }
}
