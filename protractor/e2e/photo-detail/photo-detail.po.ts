import { browser, by, element } from "protractor";

export class PhotoDetailPage {

    static PAGE_TITLE = 'Photo detail';

    navigateTo(id: number) {
        return browser.get(`${browser.baseUrl}/#/p/${id}`);
    }

    getWindowTitle() {
        return browser.getTitle();
    }

    fillComment(text: string) {
        return this.elementByCss('textarea.form-control').sendKeys(text);
    }

    publishComment() {
        return this.elementByCss('button[type="submit"]').click();
    }

    getCommentListSize() {
        return element.all(by.css('ap-photo-comments li')).count();
    }

    private elementByCss(css: string) {
        return element(by.css(css));
    }
}