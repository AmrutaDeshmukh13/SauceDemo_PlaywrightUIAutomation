import { Page, Locator,expect } from '@playwright/test';

export class CheckoutPage{
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
            
    }

async verifyProductInCheckout(productName: string){
    await expect(this.page.locator('.inventory_item_name')).toHaveText(productName);
  }

  async clickOnFinish(){
    await this.page.getByRole('button',{name:'finish'}).click();
    await expect(this.page.locator('.complete-text')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}