import { test } from '@playwright/test';
import { PostcardPage } from './pages/PostcardPage';
import { ShopPage } from './pages/shopPage';

test('CERN shop - filter postcards and verify Atlas postcard price', async ({ page }) => {
    test.setTimeout(120000); // Increase test timeout to 2 minutes

    const shopPage = new ShopPage(page);
    const postcardPage = new PostcardPage(page);

    await shopPage.goto();
    await shopPage.selectCategory('Postcards');
    await shopPage.clickFilter();
    await shopPage.isItemVisible('Atlas postcard');

    await shopPage.clickItem('Atlas postcard');
    await postcardPage.verifyPrice('1.5 CHF');
});

