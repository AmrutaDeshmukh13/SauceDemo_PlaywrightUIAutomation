import { test, expect } from '../fixtures/basicFixture';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';


test.afterEach(async ({ loggedInPage }, testInfo) => {
  await ScreenshotUtil.attachVideoOnFailure(loggedInPage, testInfo);
});

test('product test', async ({ loggedInPage },testInfo) => {
  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage,testInfo);
  const checkoutPage = new CheckoutPage(loggedInPage);

  await productPage.addToCart('Sauce Labs Backpack');

  const badgeText = await productPage.getCartBadgeText();
  expect(badgeText).toBe('1');

  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();

  await cartPage.verifyProductInCart('Sauce Labs Backpack');
  await cartPage.clickOnCheckout();
  await cartPage.fillCheckoutInformation('ftest','ltest',4535);
  
  //Taking page screenshot
  await ScreenshotUtil.capturePage(
    loggedInPage,
    'cart-page',
    testInfo
  );

  await checkoutPage.verifyProductInCheckout('Sauce Labs Backpack');
    //Taking page screenshot
  await ScreenshotUtil.capturePage(
    loggedInPage,
    'checkout-page',
    testInfo
  );

  await checkoutPage.clickOnFinish();
});
test('add another product test', async ({ loggedInPage },testInfo) => {
  const productPage = new ProductsPage(loggedInPage);
   const cartPage = new CartPage(loggedInPage,testInfo);

  const checkoutPage = new CheckoutPage(loggedInPage);

  await productPage.addToCart('Sauce Labs Bike Light');

  const badgeText = await productPage.getCartBadgeText();
  expect(badgeText).toBe('1');

  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();

  await cartPage.verifyProductInCart('Sauce Labs Bike Light');
  await cartPage.clickOnCheckout();
  await cartPage.fillCheckoutInformation('ftest','ltest',4535);

  await checkoutPage.verifyProductInCheckout('Sauce Labs Bike Light1');
  await checkoutPage.clickOnFinish();
});