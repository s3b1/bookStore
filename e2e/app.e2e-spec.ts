import { AppPage } from './app.po';

describe('As a user', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(() => {
    page.sleep();
  });

  it(`I should see 'Biblioteket'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Biblioteket');
  });

  it(`I should be able to see placeholder`, () => {
    expect(page.searchPlaceholder())
      .toEqual('Skriv titel, författare, år etc.');
  });

  it(`I should be able to enter search criteria`, () => {
    expect(page.searchField())
      .toBeNull;
  });

  it(`I should be able to enter TEST search criteria`, () => {
    page.setKeys();
    expect(page.searchField())
      .toEqual('Le Test');
  });

  it(`I should be able to click on the first item and see the title of the selected book`, () => {
    var string = page.getMyBook();
    //string.then(function(text){console.log(text);});
    page.selectMyBook();
    //page.getTitle().then(function(text){console.log(text);});
    expect(page.getTitle())
      .toEqual(string);
  });

  it(`I should be able to pin the book`, () => {
    page.addToCart();
    expect(page.getSavedBooks().count())
      .toBe(1);
  });

  it(`I should be able to pin a second book`, () => {
    page.setKeys();
    var string = page.getMySecondBook();
    // string.then(function(text){console.log(text);});
    page.selectMySecondBook();
    // page.getTitle().then(function(text){console.log(text);});
    page.addToCart();
    expect(page.getSavedBooks().count())
      .toBe(2);
      expect(page.getTitle())
        .toEqual(string);
  });

  it(`I should be able to navigate in my book selection`, () => {
  var string = page.getSavedBookTitle().first().getText();
  page.getSavedBookTitle().first().click()
  expect(page.getTitle())
    .toEqual(string);
  });

  it(`I should be able to remove one book from my selection`, () => {
    page.getBinIcon().get(1).click();
    expect(page.getSavedBooks().count())
      .toBe(1);
  });

  it(`I should be able to remove clear my selection`, () => {
    page.getCancelButton().first().click();
    expect(page.getSavedBooks().count())
      .toBe(0);
  });

});
