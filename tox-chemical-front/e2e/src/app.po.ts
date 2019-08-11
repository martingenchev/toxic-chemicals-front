import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  btnsubmit(){
    return element.all(by.tagName('button')).click();
  }

  getParagraphText() {
    return element(by.css('app-availability h1')).getText();
  }

  getByFormControlName(name: string) {
    return element(by.css('[formControlName=' + name + ']'));
  }

  gateLogin(username: string, password: string) {
    this.navigateTo();
    this.getByFormControlName('username').sendKeys(username);
    this.getByFormControlName('password').sendKeys(password);
    this.btnsubmit();
  }
  // process for print the ticket
  printTicket() {
    this.gateLogin('gate' , 'pass');
    element.all(by.tagName('mat-radio-button')).get(1).click();
    element.all(by.tagName('mat-select')).click();
    element.all(by.tagName('mat-option')).get(1).click();
    this.getByFormControlName('quantity').sendKeys(3);
    element.all(by.tagName('button')).get(3).click();
  }
}
