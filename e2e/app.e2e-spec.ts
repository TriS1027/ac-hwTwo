import { HwTwoPage } from './app.po';

describe('hw-two App', () => {
  let page: HwTwoPage;

  beforeEach(() => {
    page = new HwTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
