class PostcardPage {
    constructor(page) {
        this.page = page;
    }

    async verifyPrice(price) {
        await this.page.getByText(price).then(element => expect(element).toBeVisible({ timeout: 20000 }));
    }
}

module.exports = { PostcardPage };
