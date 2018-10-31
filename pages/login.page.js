class LoginPage {
  
  get usernameField() { return ${"#username"}; }
  get passwordField() { return ${"#password"}; }
  get loginButton() { return ${".fa-sign-in"}; }
  
  
}

module.exports = new LoginPage();
