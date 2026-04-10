// utils/ScreenshotUtil.ts
import { Page, Locator, TestInfo } from '@playwright/test';

export class ScreenshotUtil {

  // 📸 Page Screenshot
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

  // 📸 Element Screenshot
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
}