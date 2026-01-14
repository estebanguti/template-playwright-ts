import { test, expect } from '@playwright/test';
import { HomePage, LoginPage } from '../src/pages';

test('Verify login is successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.navigateToLogin();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(homePage.shoppingCart).toBeVisible();
});

