import { browser, by, element } from "protractor";

export class SignUpPage {
    static PAGE_TITLE = 'Sign up';

    naviageTo() {
        return browser.get(`${browser.baseUrl}#/home/signup`);
    }

    getTitle() {
        return browser.getTitle();
    }

    fillEmailField(text: string) {
        return this.elementByCss('input[formControlName="email"]').sendKeys(text);
    }

    fillFullNameField(text: string) {
        return this.elementByCss('input[formControlName="fullName"]').sendKeys(text);
    }

    fillUserNameField(text: string) {
        return this.elementByCss('input[formControlName="userName"]').sendKeys(text);
    }

    fillPasswordField(text: string) {
        return this.elementByCss('input[formControlName="password"]').sendKeys(text);
    }

    register() {
        return this.elementByCss('button[type="submit"]').click();
    }

    elementByCss(css: string) {
        return element(by.css(css));
    }
}