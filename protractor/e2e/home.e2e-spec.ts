import { browser, by, element, protractor } from 'protractor';

describe('Home Page', () => {
    it('Should navigate to user profile', async () => {
        await browser.get(`${browser.baseUrl}/#/user/flavio`);
        const title = await browser.getTitle();
        expect(title).toBe('Timeline');
    });

    it('Should display a list of photos', async () => {
        await browser.get(`${browser.baseUrl}/#/user/flavio`);
        const list = element.all(by.css('.photo'));
        const photoListSize = await list.count();
        expect(photoListSize).toBeGreaterThan(0);
    });

    it('Should navigate to photo detail when photo navigation is triggered', async () => {
        await browser.get(`${browser.baseUrl}/#/user/flavio`);
        const firstElement = element.all(by.css('.photo')).first();
        // await firstElement.sendKeys(protractor.Key.ENTER); // Métoddo quando o webdriver antigo
        await firstElement.click(); // Metodo atualizado
        const title = await browser.getTitle();
        expect(title).toBe('Photo detail');
    });

    it('Should list one item when filtering by word "farol"', async () => {
        await browser.get(`${browser.baseUrl}/#/user/flavio`);
        const searchInput = element(by.css('ap-search input[type=search]'));
        await searchInput.sendKeys('farol');
        const list = element.all(by.css('.photo'));
        const photoListSize = await list.count();
        expect(photoListSize).toBe(1);
    })
})