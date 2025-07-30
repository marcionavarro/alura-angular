import { browser, logging } from 'protractor';
import { HomePage } from './home.po';
import { PhotoDetailPage } from './photo-detail.po';

describe('Home Page', () => {
    let homePage = new HomePage;
    let photoDetailPage = new PhotoDetailPage;

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    })

    beforeEach(async () => {
        homePage = new HomePage();
        photoDetailPage = new PhotoDetailPage();
        await homePage.navigateTo();
    })

    it('Should navigate to user profile', async () => {
        const title = await homePage.getTitle();
        expect(title).toBe(HomePage.PAGE_TITLE);
    });

    it('Should display a list of photos', async () => {
        const photoListSize = await homePage.getPhotoListSize();
        expect(photoListSize).toBeGreaterThan(0);
    });

    it('Should navigate to photo detail when photo navigation is triggered', async () => {
        await homePage.clickOnFirstItemFromPhotoList();
        const title = await photoDetailPage.getWindowTitle();
        expect(title).toBe(PhotoDetailPage.PAGE_TITLE);
    });

    it('Should list one item when filtering by word "farol"', async () => {
        await homePage.fillSearchInputWith('farol');
        const photoListSize = await homePage.getPhotoListSize();
        expect(photoListSize).toBe(1);
    })
})