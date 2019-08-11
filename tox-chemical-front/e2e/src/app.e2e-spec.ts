import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

it('go to gate', () => {
  page.gateLogin('gate' , 'pass');
  expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/gate');
});

it('display New as h1', () => {
  page.gateLogin('gate' , 'pass');
  expect(page.getParagraphText()).toEqual('New');
 });

it('print a ticket', () => {
  page.printTicket();
  // browser.sleep(1000);
  expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/gate/location');
});

it('generate ticket', () => {
  page.printTicket();
  element.all(by.tagName('button')).get(1).click();
  expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/gate');
  });

it('approve ticket', () => {
  page.gateLogin('wh1', 'secured');
  element(by.tagName('mat-radio-button')).click();
  element.all(by.css('.btn-dark')).get(1).click();
  expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/warehouse-inventory');
});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});

});
