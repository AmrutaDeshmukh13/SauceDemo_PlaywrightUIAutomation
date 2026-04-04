import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async gotoLoginPage() {
        await this.page.goto(`${process.env.APP_URL}`);
    }

    async login(user: string, pwd: string) {
        await this.username.fill(user);
        await this.password.fill(pwd);
        await this.loginButton.click();
    }

    async verifyLoginSucess() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }

}

