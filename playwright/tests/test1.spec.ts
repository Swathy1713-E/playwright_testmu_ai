import { test } from '../testmuAI.setup';
import { expect } from "@playwright/test";

test("Scenario 1", async ({ page }) => {
  await page.goto("https://www.testmuai.com/selenium-playground/ ");

  await page.getByText("Simple Form Demo").click();

  const URL = await page.url();
  expect(URL).toContain("simple-form-demo");

  const welcomeText = "Welcome to TestMu AI";

  const usernameInput = page.getByPlaceholder("Please enter your Message");
  await usernameInput.fill(welcomeText);

  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "Get Checked Value" }).click();

  await expect(page.locator('(//div[@id="user-message"]/p)[1]')).toHaveText(
    welcomeText,
  );

await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: {   status: "passed",
      remark: "Test passed successfully" } })}`);
});