const { expect } = require('@playwright/test');

class ShopPage {
    constructor(page) {
        this.page = page;
        this.categoryDropdown = page.getByLabel('Category');
        this.filterButton = page.getByRole('button', { name: 'Filter' });
    }

    async goto() {
        await this.page.goto('https://visit.cern/shop', { timeout: 60000, waitUntil: 'load' });
    }

    async selectCategory(category) {
        await this.categoryDropdown.selectOption({ label: category });
    }

    async clickFilter() {
        await this.filterButton.click();
    }

    async isItemVisible(itemName) {
        const itemLink = this.page.getByRole('link', { name: new RegExp(itemName, 'i') });
        await expect(itemLink.first()).toBeVisible({ timeout: 20000 });
    }

    async clickItem(itemName) {
        const itemLink = this.page.getByRole('link', { name: new RegExp(itemName, 'i') });
        await itemLink.first().waitFor({ state: 'visible', timeout: 10000 });
        await itemLink.first().click({ timeout: 10000 });
    }
}

module.exports = { ShopPage };
