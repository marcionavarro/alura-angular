import { browser, by, element } from "protractor";

export class SignInPage {
    static PAGE_TITLE = 'Sign in';

    getTitle() {
        return browser.getTitle();
    }

    fillUserNameField(text: string) {
        return this.elementByCss('input[formControlName=userName]').sendKeys(text);
    }

    fillPasswordield(text: string) {
        return this.elementByCss('input[formControlName=password]').sendKeys(text);
    }

    login() {
        return this.elementByCss('button[type=submit]').click();
    }

    elementByCss(css: string) {
        return element(by.css(css));
    }
}