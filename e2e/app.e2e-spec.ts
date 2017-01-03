import { DpolPage } from './app.po';

describe('dpol App', function() {
  let page: DpolPage;

  beforeEach(() => {
    page = new DpolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
