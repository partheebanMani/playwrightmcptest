import { expect, Page, Locator } from '@playwright/test';

export class ShopPage {
    readonly page: Page;
    readonly categoryDropdown: Locator;
    readonly filterButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryDropdown = page.getByLabel('Category');
        this.filterButton = page.getByRole('button', { name: 'Filter' });
    }

    async goto() {
        await this.page.goto('https://visit.cern/shop', { timeout: 60000, waitUntil: 'load' });
    }

    async selectCategory(category: string) {
        await this.categoryDropdown.selectOption({ label: category });
    }

    async clickFilter() {
        await this.filterButton.click();
    }

    async isItemVisible(itemName: string) {
        const itemLink = this.page.getByRole('link', { name: new RegExp(itemName, 'i') });
        await expect(itemLink.first()).toBeVisible({ timeout: 20000 });
    }

    async clickItem(itemName: string) {
        const itemLink = this.page.getByRole('link', { name: new RegExp(itemName, 'i') });
        await itemLink.first().waitFor({ state: 'visible', timeout: 10000 });
        await itemLink.first().click({ timeout: 10000 });
    }
}
