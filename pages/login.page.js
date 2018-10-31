class LoginPage {
  
  get usernameField() { return browser.element{"#username"}; }   // $ = browser.element   and    $$ = browser.elements (returns an array)
  get passwordField() { return browser.element{"#password"}; }
  get loginButton() { return browser.element{".fa-sign-in"}; }
  
  
  submitLoginForm(username, password) {
    browser.setValue(this.usernameField, username);
    browser.setValue(this.passwordField, password);
    browser.click(this.loginButton);
  }  
  
}

module.exports = new LoginPage();
