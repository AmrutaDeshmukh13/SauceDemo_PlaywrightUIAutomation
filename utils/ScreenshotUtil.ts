// utils/ScreenshotUtil.ts
import { Page, Locator } from '@playwright/test';


export class ScreenshotUtil {

  // 📸 1. Capture Specific Element Screenshot
  static async captureElement(
    locator: Locator,
    fileName: string
  ): Promise<string> {

    const path = `screenshots/element-${fileName}-${Date.now()}.png`;

    await locator.scrollIntoViewIfNeeded();

    await locator.screenshot({ path });

    return path;
  }

  // 📸 2. Capture Full Page Screenshot
  static async capturePage(
    page: Page,
    fileName: string
  ): Promise<string> {

    const path = `screenshots/page-${fileName}-${Date.now()}.png`;

    await page.screenshot({
      path,
      fullPage: true
    });

    return path;
  }


}