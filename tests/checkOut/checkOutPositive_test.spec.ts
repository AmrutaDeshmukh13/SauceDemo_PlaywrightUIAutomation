import { test, expect } from '../../fixtures/basicFixture';
import { ExcelUtil } from '../../utils/ExcelUtil';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ScreenshotUtil } from '../../utils/ScreenshotUtil';

test.describe.configure({ mode: 'parallel' });

// 🎥 Attach video on failure
test.afterEach(async ({ loggedInPage }, testInfo) => {
  await ScreenshotUtil.attachVideoOnFailure(loggedInPage, testInfo);
});


// ✅ Test 1
test('Valid Checkout', async ({ loggedInPage }, testInfo) => {

  const data = ExcelUtil.getDataByTestName('Checkout', testInfo.title);

  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage, testInfo);
  const checkoutPage = new CheckoutPage(loggedInPage);

  await productPage.addToCart('Sauce Labs Backpack');
  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();

  await cartPage.verifyProductInCart('Sauce Labs Backpack');
  await cartPage.clickOnCheckout();

  await cartPage.fillCheckoutInformation(
    data.firstName,
    data.lastName,
    data.zip
  );

  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'cart-page', testInfo);

  await checkoutPage.verifyProductInCheckout('Sauce Labs Backpack');

  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'checkout-page', testInfo);

  await checkoutPage.clickOnFinish();

});


// ✅ Test 2
test('Another Checkout', async ({ loggedInPage }, testInfo) => {

  const data = ExcelUtil.getDataByTestName('Checkout', testInfo.title);

  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage, testInfo);
  const checkoutPage = new CheckoutPage(loggedInPage);

  await productPage.addToCart('Sauce Labs Backpack');
  await productPage.clickOnShoppingCart();
  await productPage.verifyNavigatedToCartPage();

  await cartPage.verifyProductInCart('Sauce Labs Backpack');
  await cartPage.clickOnCheckout();

  await cartPage.fillCheckoutInformation(
    data.firstName,
    data.lastName,
    data.zip
  );

  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'cart-page', testInfo);

  await checkoutPage.verifyProductInCheckout('Sauce Labs Backpack');

  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'checkout-page', testInfo);

  await checkoutPage.clickOnFinish();

});