import { test } from '../testmuAI.setup';
import { expect } from "@playwright/test";

test("Scenario 2", async ({ page }) => {
  await page.goto("https://www.testmuai.com/selenium-playground/ ");

  await page.getByText("Drag & Drop Sliders").click();

  await page.waitForTimeout(5000);

  await page.locator("//div[@id='slider3']/div/input").click();
  for (let i = 50; i < 95; i++) {
    await page.keyboard.press("ArrowRight");
  }
  await expect(page.locator("//*[@id='rangeSuccess']")).toHaveText("95");
 await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: {   status: "passed",
      remark: "Test passed successfully" } })}`);
});