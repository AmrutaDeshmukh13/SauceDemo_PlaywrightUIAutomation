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
test('Missing Last Name', async ({ loggedInPage }, testInfo) => {

  const data = ExcelUtil.getDataByTestName('Negative', testInfo.title);

  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage, testInfo);
  

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
      
  await cartPage.verifyErrorMessage(data.errormessage);
  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'missing last name error', testInfo);
  
});

test('Missing Zip', async ({ loggedInPage }, testInfo) => {

  const data = ExcelUtil.getDataByTestName('Negative', testInfo.title);

  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage, testInfo);
  

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
      
  await cartPage.verifyErrorMessage(data.errormessage);
  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'missing zip error', testInfo);
  
});

test('Missing First Name', async ({ loggedInPage }, testInfo) => {

  const data = ExcelUtil.getDataByTestName('Negative', testInfo.title);

  const productPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage, testInfo);
  

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
      
  await cartPage.verifyErrorMessage(data.errormessage);
  // 📸 Screenshot
  await ScreenshotUtil.capturePage(loggedInPage, 'missing first name error', testInfo);
  
});