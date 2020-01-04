import { AppPage } from './app.po';

describe('book-store App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should display 'Biblioteket'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Biblioteket');
  });
});
