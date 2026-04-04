import { test,expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSucess();
});

test('product test', async ({ page }) => {
    const productPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

   await productPage.addToCart('Sauce Labs Backpack');

  const badgeText = await productPage.getCartBadgeText();
  expect(badgeText).toBe('1');

  
  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();
  await cartPage.verifyProductInCart('Sauce Labs Backpack');
  await cartPage.clickOnCheckout();
  await cartPage.fillCheckoutInformation('ftest','ltest',4535);
  
  await checkoutPage.verifyProductInCheckout('Sauce Labs Backpack');
  await checkoutPage.clickOnFinish();
});

test('add another product to cart', async ({ page }) => {
  const productPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await productPage.addToCart('Sauce Labs Backpack');
  const badgeText = await productPage.getCartBadgeText();

  expect(badgeText).toBe('1');
  
  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();
  await cartPage.verifyProductInCart('Sauce Labs Backpack');
  await cartPage.clickOnCheckout();
  await cartPage.fillCheckoutInformation('ftest','ltest',4535);
  
  await checkoutPage.verifyProductInCheckout('Sauce Labs Backpack');
  await checkoutPage.clickOnFinish();
});