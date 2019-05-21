import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to tox-chemical-front!');
  // });

it('should go to gate', () => {
page.navigateTo();
    
page.getByFormControlName('username').sendKeys('gate');
// browser.sleep(1000);
page.getByFormControlName('password').sendKeys('whatever');
// browser.sleep(1000);
element(by.id('btnUserlogin')).click();
// browser.sleep(1000);
expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/gate');
// browser.sleep(1000);
});

});
