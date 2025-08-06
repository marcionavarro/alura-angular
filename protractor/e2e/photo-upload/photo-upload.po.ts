import { browser, by, element } from "protractor";
const path = require('path');
const image = '../../src/assets/img/home.jpg';

export class PhotoUploadPage {
    static PAGE_TITLE = 'Photo upload';

    navigateTo() {
        return browser.get(`${browser.baseUrl}/#/p/add`);
    }

    getTitle() {
        return browser.getTitle();
    }

    fillDescription(text: string) {
        return element(by.css('textarea[formControlName=description]'))
            .sendKeys(text);
    }

    upload() {
        return element(by.css('button[type=submit]')).click();
    }

    selectImage() {
        const absolutePathImage = path.resolve(__dirname, image);
        console.log(absolutePathImage);
        return element(by.css('input[formControlName=file]'))
            .sendKeys(absolutePathImage);
    }
}