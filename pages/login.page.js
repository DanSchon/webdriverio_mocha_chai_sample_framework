class LoginPage {
  
  get usernameField() { return browser.element{"#username"}; }   // $ = browser.element   and    $$ = browser.elements (returns an array)
  get passwordField() { return browser.element{"#password"}; }
  get loginButton() { return browser.element{".fa-sign-in"}; }
  
  
  submitLoginForm(username, password) {
    if (username) { this.usernameField.setValue(username); }
    if (password) { this.passwordField.setValue(password); }
    this.loginButton.click();
  }  
  
}

module.exports = new LoginPage();
