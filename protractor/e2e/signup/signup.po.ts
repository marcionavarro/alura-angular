import { browser, by, element } from "protractor";

export class SignUpPage {
    static PAGE_TITLE = 'Sign up';

    naviageTo() {
        return browser.get(`${browser.baseUrl}#/home/signup`);
    }

    getTitle() {
        return browser.getTitle();
    }

    fillField(control: string, text: string) {
        return element(by.formControlName(control))
            .sendKeys(text);
    }

    register() {
        return this.elementByCss('button[type="submit"]').click();
    }

    elementByCss(css: string) {
        return element(by.css(css));
    }
}