import { browser, by, element } from 'protractor';

export class AppPage {

  wait() {
      return browser.waitForAngularEnabled(true);
  }

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  searchField() {
    return element(by.id('search')).getWebElement().getAttribute('value');
  }

  searchPlaceholder() {
    return element(by.id('search')).getWebElement().getAttribute('placeholder');
  }

  setKeys() {
    return element(by.id('search')).getWebElement().sendKeys('Le Test');
  }

  getTitle() {
    return element(by.id('bookTitle')).getText();
  }

  getMyBook() {
    return element.all(by.className('list-group-item')).first().getText();
  }

  getMySecondBook() {
    return element.all(by.className('list-group-item')).get(1).getText();
  }

  pause() {
    return browser.waitForAngular();
  }

  selectMyBook() {
    return element.all(by.className('list-group-item')).first().click();
  }

  selectMySecondBook() {
    return element.all(by.className('list-group-item')).get(1).click();
  }

  sleep() {
    return browser.sleep(6000);
  }

  addToCart() {
    return element(by.id('addToCart')).click();
  }

  getSavedBooks() {
    return element.all(by.className('savedbook'));
  }

  getSavedBookTitle() {
    return element.all(by.className('savedbooktitle'));
  }

  getBinIcon() {
    return element.all(by.className('btn-sm'));
  }

  getCancelButton() {
    return element.all(by.className('btn-danger'));
  }

}
