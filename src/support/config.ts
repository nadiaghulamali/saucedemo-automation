export const BASE_URL = 'https://www.saucedemo.com';
export const CREDENTIALS = {
  username: process.env.SAUCE_USERNAME || 'standard_user',
  password: process.env.SAUCE_PASSWORD || 'secret_sauce'
};
export const SEED = Number(process.env.SEED) || 42;
export const HEADLESS = process.env.HEADLESS !== 'false';
export const TIMEOUT = 30000;
