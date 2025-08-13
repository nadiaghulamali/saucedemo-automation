# SauceDemo Automation (Playwright + TypeScript + Cucumber)

**Project Overview:**

* TypeScript + Playwright + Cucumber BDD
* Page Object Model (POM) 
* Chromium-only execution
* Reporting:
  * Cucumber JSON → HTML report (`multiple-cucumber-html-reporter`)
  * Allure results placeholder
---

## Quick Setup

1. Install Node.js (v18+ recommended)
2. Install dependencies:

```bash
npm install
npx playwright install chromium
```

---

## Run Tests

```bash
npm test
```

---

### Generate Reports

**HTML Report:**

```bash
npm run report:html
```

**Allure Report** ( `allure-commandline` is installed):

```bash
npm run report:allure:generate
npm run report:allure:open
```

---

## Notes

* **Locators** are under `src/locators`
* **Pages** are under `src/pages`, using classes extending `BasePage`
* **Steps** use Playwright to drive Chromium pages
