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

    async login() {
        await this.username.fill(`${process.env.UNAME}`);
        await this.password.fill(`${process.env.PWD}`);
        await this.loginButton.click();
    }

    async verifyLoginSucess() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }

}

