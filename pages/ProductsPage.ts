import { Page, Locator,expect,TestInfo } from '@playwright/test';
import { BasePage } from './BasePage'; 


export class ProductsPage extends BasePage{
       readonly shoppingCartBadge:Locator;        

    constructor(page: Page) {
        super(page);
        this.shoppingCartBadge=page.locator('.shopping_cart_badge');
    }

    async addToCart(productName: string) {
    
    //I use locator chaining and filtering like :has-text() to scope elements within a parent container, ensuring stable and precise element interaction.

    // Locate the product container by its name
    //.inventory_item:has-text() Find correct product
    const productLocator: Locator = this.page.locator(`.inventory_item:has-text("${productName}")`);
    
    //.locator('button...') .locator('button...')
    // Find the Add to cart button inside that product container
    const addButton: Locator = productLocator.locator('button:has-text("Add to cart")');
    
    // Click the button
    await addButton.click();
    //Static locators are defined in constructor, while dynamic locators
    //  are implemented as reusable methods to handle runtime data.

  }

  async getCartBadgeText(): Promise<string | null> {
    return await this.page.locator('.shopping_cart_badge').textContent();
  }

  async clickOnShoppingCart() {
   await this.click(this.shoppingCartBadge);
  }

  async verifyNavigatedToCartPage() {
        await this.page.waitForURL('https://www.saucedemo.com/cart.html');
    }

   
}