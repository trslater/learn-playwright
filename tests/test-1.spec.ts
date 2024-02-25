import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://trslater.ca/learn-playwright/");
  await page.getByLabel("Username:").fill("user1");
  await page.getByLabel("Password:").fill("pass1");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Foobar")).toBeVisible();
});
