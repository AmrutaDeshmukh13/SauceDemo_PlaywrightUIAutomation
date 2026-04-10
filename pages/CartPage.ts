import { Page, Locator,expect } from '@playwright/test';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';

export class CartPage{
    readonly page: Page;
    readonly productcart:Locator;
    readonly btnCheckout:Locator;
    readonly txtFName:Locator;  
    readonly txtLName:Locator;  
    readonly txtZipCode:Locator;
    readonly btnContinue:Locator;
    constructor(page: Page) {
        this.page = page;
        this.productcart=page.locator('.inventory_item_name');
        this.btnCheckout=page.getByRole('button',{name:'checkout'}); 
        this.txtFName =page.getByPlaceholder('First Name');  
        this.txtLName=page.getByPlaceholder('Last Name');
        this.txtZipCode=page.getByPlaceholder('Zip/Postal Code');
        this.btnContinue=page.locator("xpath=//input[@name='continue']");
      }

async verifyProductInCart(productName: string){
    await expect(this.productcart).toHaveText(productName);
  }
 
  async clickOnCheckout(){
    await this.btnCheckout.click();

    await this.page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(this.page.getByText('Checkout: Your Information')).toBeVisible(); 
}

async fillCheckoutInformation(FName:string,LName:string,zipCode:number){
  await this.txtFName.fill(FName);
  await this.txtLName.fill(LName);
  await this.txtZipCode.fill(zipCode.toString());
  await ScreenshotUtil.captureElement(this.txtZipCode, 'zipCode');
  await this.btnContinue.click();
   
}
}