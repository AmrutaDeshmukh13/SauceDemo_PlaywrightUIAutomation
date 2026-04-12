import { Page, Locator,expect,TestInfo } from '@playwright/test';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';
import { BasePage } from './BasePage'; 


export class CartPage extends BasePage{
    //readonly page: Page;
    readonly productcart:Locator;
    readonly btnCheckout:Locator;
    readonly txtFName:Locator;  
    readonly txtLName:Locator;  
    readonly txtZipCode:Locator;
    readonly btnContinue:Locator;
    readonly errorMessage:Locator;
    readonly testInfo: TestInfo;

    constructor(page: Page,testInfo: TestInfo) {
       // this.page = page;
       super(page);
        this.productcart=page.locator('.inventory_item_name');
        this.btnCheckout=page.getByRole('button',{name:'checkout'}); 
        this.txtFName =page.getByPlaceholder('First Name');  
        this.txtLName=page.getByPlaceholder('Last Name');
        this.txtZipCode=page.getByPlaceholder('Zip/Postal Code');
        this.btnContinue=page.locator("xpath=//input[@name='continue']");
        this.errorMessage=page.locator('[data-test="error"]');
        this.testInfo = testInfo;
      }

async verifyProductInCart(productName: string){
    await expect(this.productcart).toHaveText(productName);
  }
 
  async clickOnCheckout(){
    await this.click(this.btnCheckout);

    await this.page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(this.page.getByText('Checkout: Your Information')).toBeVisible(); 
}
//inheritaed fill method used
async fillCheckoutInformation(FName:string,LName:string,zipCode:number){
  if (FName !=undefined){
     await this.fill(this.txtFName,FName);
     }
  if (LName !=undefined){   
  await this.fill(this.txtLName,LName);
  }
  if (zipCode !=undefined){
      await this.fill(this.txtZipCode,zipCode.toString());
      await ScreenshotUtil.captureElement(
            this.txtZipCode,
            'ZipCode',
            this.testInfo
    );
  }
 
 
  
  await this.click(this.btnContinue);
   
}
 async verifyErrorMessage(errorMsg:string){
   await expect(this.errorMessage).toHaveText(errorMsg);
 }
}