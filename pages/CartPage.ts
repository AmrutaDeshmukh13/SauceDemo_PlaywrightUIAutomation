import { Page, Locator,expect } from '@playwright/test';

export class CartPage{
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
            
    }

async verifyProductInCart(productName: string){
    await expect(this.page.locator('.inventory_item_name')).toHaveText(productName);
  }
 
  async clickOnCheckout(){
    await this.page.getByRole('button',{name:'checkout'}).click();
    await this.page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(this.page.getByText('Checkout: Your Information')).toBeVisible(); 
}

async fillCheckoutInformation(FName:string,LName:string,zipCode:number){
  await this.page.getByPlaceholder('First Name').fill(FName);
  await this.page.getByPlaceholder('Last Name').fill(LName);
  await this.page.getByPlaceholder('Zip/Postal Code').fill(zipCode.toString());
  await this.page.locator("xpath=//input[@name='continue']").click();
}
}