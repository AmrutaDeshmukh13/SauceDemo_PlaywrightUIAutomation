import { Page, Locator,expect } from '@playwright/test';

export class ProductsPage{
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
            
    }

    async addToCart(productName: string) {
    // Locate the product container by its name
    const productLocator: Locator = this.page.locator(`.inventory_item:has-text("${productName}")`);
    
    // Find the Add to cart button inside that product container
    const addButton: Locator = productLocator.locator('button:has-text("Add to cart")');
    
    // Click the button
    await addButton.click();
  }

  async getCartBadgeText(): Promise<string | null> {
    return await this.page.locator('.shopping_cart_badge').textContent();
  }

  async clickOnShoppingCart() {
   await this.page.locator('.shopping_cart_badge').click();
  }

  async verifyNavigatedToCartPage() {
        await this.page.waitForURL('https://www.saucedemo.com/cart.html');
    }

   
}