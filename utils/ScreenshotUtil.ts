// utils/ScreenshotUtil.ts
import { Page, Locator, TestInfo } from '@playwright/test';

export class ScreenshotUtil {

  //  Page Screenshot
  static async capturePage(
    page: Page,
    fileName: string,
    testInfo: TestInfo
  ): Promise<void> {

    const buffer = await page.screenshot({ fullPage: true });

    await testInfo.attach(fileName, {
      body: buffer,
      contentType: 'image/png'
    });
  }

  //  Element Screenshot
  static async captureElement(
    locator: Locator,
    fileName: string,
    testInfo: TestInfo
  ): Promise<void> {

    const buffer = await locator.screenshot();

    await testInfo.attach(fileName, {
      body: buffer,
      contentType: 'image/png'
    });
  }
   //attach video failure in Allure report
    static async attachVideoOnFailure(
    page: Page,
    testInfo: TestInfo
  ): Promise<void> {

    // Only attach if test failed
    if (testInfo.status !== testInfo.expectedStatus) {
      if (page) {
      const video = page.video();

      if (video) {
        const path = await video.path();

        await testInfo.attach('Failure Video', {
          path: path,
          contentType: 'video/webm'
        });
      }
    }
    }
  }

}