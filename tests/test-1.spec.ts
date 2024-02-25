import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://trslater.ca/learn-playwright/");
  await page.getByLabel("Username:").fill(process.env.FAKE_USERNAME ?? "");
  await page.getByLabel("Password:").fill(process.env.FAKE_PASSWORD ?? "");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Foobar")).toBeVisible();
});
