import { browser, by, element } from "protractor";

export class HomePage {

    static PAGE_TITLE = 'Timeline'

    async navigateTo() {
        return browser.get(`${browser.baseUrl}/#/user/flavio`);
    }

    async getWindowTitle() {
        return browser.getTitle();
    }

    getPhotoListSize() {
        return this.elementAllByCss('.photo').count();
    }

    fillSearchInputWith(text: string) {
        return this.elementAllByCss('ap-search input[type=search]').sendKeys(text);
    }

    clickOnFirstItemFromPhotoList() {
        return this.elementAllByCss('.photo').first().click();
    }

    private elementAllByCss(css: string) {
        return element.all(by.css(css));
    }
}