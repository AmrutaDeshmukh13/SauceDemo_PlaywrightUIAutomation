🚀 Playwright Automation Framework (SauceDemo)
📌 Overview

This project demonstrates an end-to-end UI automation framework built using Playwright with TypeScript for the SauceDemo application.

The framework follows industry best practices such as:

Page Object Model (POM)
Reusable utilities
Data-driven testing
Advanced reporting
🛠️ Tech Stack
Framework: Playwright
Language: TypeScript
Design Pattern: Page Object Model (POM)
Reporting: Allure Report
CI/CD: Jenkins (Ready for integration)
🏗️ Framework Design
🔹 Page Object Model (POM)
Each page is implemented as a separate class under pages/
Locators are defined as private members
Actions are exposed via public methods
Improves readability, reusability, and maintainability
🔹 BasePage (Inheritance)
Common methods defined:
click()
fill()
Common UI actions
All page classes extend BasePage
Promotes code reusability and consistency
🔹 Fixtures (Custom Setup)
Custom fixture for login
Provides loggedInPage to tests
Eliminates redundant login steps
Improves test readability
🔹 Utilities

Reusable utility functions include:

📸 Element screenshot capture
📸 Full page screenshot capture
🎥 Video capture on failure
Attach artifacts to Allure report
🔹 Reporting (Allure)
Integrated with Allure Report
Supports:
Screenshots
Videos (on failure)
Execution logs
Provides rich and interactive reports
🌐 Cross-Browser Execution

Supports multiple browsers:

Chromium (Chrome/Edge)
Firefox
WebKit (Safari)
▶️ Run Tests
npx playwright test
▶️ Run on Specific Browser
npx playwright test --project=chromium
⚡ Parallel Execution
Enabled using Playwright workers
Reduces execution time
Improves test efficiency
📊 Test Data Management (Excel-Based Data-Driven Testing)
Externalized test data using Excel (testData.xlsx)
Organized into multiple sheets (Positive, Negative scenarios)
Each test case mapped using testName
Controlled execution using run flag (Y/N):
Y → Execute
N → Skip
Dynamic data fetching using ExcelUtil
Handles:
Blank/null values
Data normalization
Supports parallel execution with data-driven tests
📁 Project Structure
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│
├── tests/
│   ├── products_test.spec.ts
│   ├── checkOut/
│   │   ├── checkOutPositive_test.spec.ts
│   │   ├── checkOutNegative_test.spec.ts
│
├── fixtures/
│   ├── basicFixture.ts
│
├── utils/
│   ├── ScreenshotUtil.ts
│   ├── VideoUtil.ts
│   ├── ExcelUtil.ts
│
├── testData/
│   ├── testData.xlsx
│
├── allure-results/
├── allure-report/
├── test-results/
├── playwright-report/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
🏗️ Architecture Diagram
Test Files → Fixtures → Page Objects → BasePage → Utilities → Excel Data  
           → Playwright Engine → Browsers → Reports
🌟 Key Features

✔ Scalable framework using Page Object Model (POM)
✔ Reusable BasePage with inheritance
✔ Custom fixtures for login and setup
✔ Dynamic locator handling for stable element interaction
✔ Screenshot (page + element) & video capture utilities
✔ Allure reporting with rich attachments
✔ Excel-based data-driven testing
✔ Run flag (Y/N) for execution control
✔ Test case mapping using testName
✔ Handles blank/null values in test data
✔ Parallel execution support
✔ Cross-browser testing (Chromium, Firefox)
✔ Environment configuration using .env
✔ Clean and maintainable structure
✔ CI/CD ready (Jenkins compatible)