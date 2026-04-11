Playwright Automation Framework (SauceDemo)
📌 Overview

This project demonstrates an end-to-end UI automation framework built using Playwright with TypeScript for the SauceDemo application.
The framework follows industry best practices including Page Object Model (POM), reusable utilities, and advanced reporting.

🚀 Tech Stack
Framework: Playwright
Language: TypeScript
Design Pattern: Page Object Model (POM)
Reporting: Allure Report
CI/CD Ready: Jenkins compatible

🏗️ Framework Design
🔹 Page Object Model (POM)
Each page is implemented as a separate class under pages/
All locators are declared as private members
Actions are exposed via public methods
Improves maintainability and readability
🔹 BasePage (Inheritance)
Common reusable methods are defined in BasePage
click()
fill()
common UI interactions
All page classes extend BasePage
Ensures code reusability and consistency

🔹 Fixtures (Custom Setup)
Custom fixture is used for login
Provides loggedInPage to tests
Reduces duplication and improves test readability

🔹 Utilities

Reusable utility functions are implemented:

📸 Capture element screenshot
📸 Capture full page screenshot
🎥 Capture video on failure
Attach screenshots and videos to Allure report

🔹 Reporting (Allure)
Integrated with Allure
Supports:
Screenshots
Videos (on failure)
Execution details
Provides rich and interactive test reports

🔹 Execution Artifacts
✅ Screenshots (on failure + manual capture)
🎥 Videos (only on failure)
📊 Allure reports

🌐 Cross-Browser Execution

Framework supports execution across multiple browsers:

- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

Run tests on all browsers:
npx playwright test

Run on specific browser:
npx playwright test --project=Chromium

Parallel Execution
🔹 Overview

The framework supports parallel test execution using Playwright’s built-in worker mechanism to reduce execution time and improve efficiency.


📂 Project Structure
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│
├── tests/
│   ├── products_test.spec.ts
│
├── fixtures/
│   ├── basicFixture.ts
│
├── utils/
│   ├── ScreenshotUtil.ts
│   ├── VideoUtil.ts
│
├── playwright.config.ts
├── package.json
└── README.md

🌟 Key Features
✔ Scalable framework using POM
✔ Reusable BasePage with inheritance
✔ Custom fixtures for login
✔ Dynamic locator handling
✔ Utility-based screenshot & video handling
✔ Allure reporting with attachments
✔ Clean and maintainable code structure

