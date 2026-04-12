import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    
    if (!page) {
    throw new Error('Page is not initialized');
  }

  
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifyLoginSucess();

    await use(page);
  },
});

export { expect };