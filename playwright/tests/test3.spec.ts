import { test } from '../testmuAI.setup';
import { expect } from "@playwright/test";

test("Scenario 3", async ({ page }) => {
  await page.goto("https://www.testmuai.com/selenium-playground/ ");

  await page.getByRole("link", { name: "Input Form Submit" }).click();

  const submitBtn = page.locator(
    "//form[@id='seleniumform']//button[@type='submit']",
  );
  await submitBtn.click();

  const fName = page.locator("//input[@id='name']");
  const email = page.locator("//input[@id='inputEmail4']");
  const password = page.locator("//input[@id='inputPassword4']");
  const company = page.locator("//input[@id='company']");
  const website = page.locator("//input[@id='websitename']");
  const country = page.locator("//select[@name='country']");
  const city = page.locator("//input[@id='inputCity']");
  const address = page.locator("//input[@id='inputAddress1']");
  const address2 = page.locator("//input[@id='inputAddress2']");
  const state = page.locator("//input[@id='inputState']");
  const zip = page.locator("//input[@id='inputZip']");

  const validationMessage = await fName.evaluate(
    (element) => (element as HTMLInputElement).validationMessage,
  );
  await expect(validationMessage).toEqual("Please fill in this field.");
  await fName.fill("Swathy");
  await email.fill("Swathy123@gmail.com");
  await website.fill("[https://www.swathy.com");
  await password.fill("Swathy@123");
  await company.fill("Hexaware");
  await country.selectOption("United States");
  await city.fill("Los Vegaws");
  await address.fill("123");
  await address2.fill("456");
  await state.fill("AB");
  await zip.fill("65217");

  await submitBtn.click();

  await expect(page.locator("//*[@class='success-msg hidden']")).toHaveText(
    "Thanks for contacting us, we will get back to you shortly.",
  );
 await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: {   status: "passed",
      remark: "Test passed successfully" } })}`);
});
