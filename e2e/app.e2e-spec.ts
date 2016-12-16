import { AdbcdnewsPage } from './app.po';

describe('adbcdnews App', function() {
  let page: AdbcdnewsPage;

  beforeEach(() => {
    page = new AdbcdnewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
