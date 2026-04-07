import { test, expect } from '../fixtures/basicFixture';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('product test', async ({ loggedInPage }) => {
  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);
  const checkoutPage = new CheckoutPage(loggedInPage);

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
test('add another product test', async ({ loggedInPage }) => {
  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);
  const checkoutPage = new CheckoutPage(loggedInPage);

  await productPage.addToCart('Sauce Labs Bike Light');

  const badgeText = await productPage.getCartBadgeText();
  expect(badgeText).toBe('1');

  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();

  await cartPage.verifyProductInCart('Sauce Labs Bike Light');
  await cartPage.clickOnCheckout();
  await cartPage.fillCheckoutInformation('ftest','ltest',4535);

  await checkoutPage.verifyProductInCheckout('Sauce Labs Bike Light');
  await checkoutPage.clickOnFinish();
});