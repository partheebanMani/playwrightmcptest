import { expect, Page } from '@playwright/test';

export class PostcardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyPrice(price: string) {
        await expect(this.page.getByText(price)).toBeVisible({ timeout: 20000 });
    }
}

