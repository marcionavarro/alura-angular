import { browser } from 'protractor';

describe('Home Page', () => {
    it('Should navigate to user profile', async () => {
        await browser.get(`${browser.baseUrl}/#/user/flavio`);
        const title = await browser.getTitle();
        expect(title).toBe('Timeline');
    })
})