import { Page, Locator,expect,TestInfo } from '@playwright/test';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';
import { BasePage } from './BasePage'; 


export class CheckoutPage extends BasePage{
    //readonly page: Page;

    readonly productName:Locator;
    readonly btnFinish :Locator;
    readonly sucessMessage:Locator;
    constructor(page: Page) {
      //  this.page = page;
        super(page);
        this.productName=page.locator('.inventory_item_name');    
        this.btnFinish=page.getByRole('button',{name:'finish'});
        this.sucessMessage=page.locator('.complete-text');
    }

async verifyProductInCheckout(productName: string){
    await expect(this.productName).toHaveText(productName);
  }

  async clickOnFinish(){
    await this.click(this.btnFinish);
    await expect(this.sucessMessage).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}