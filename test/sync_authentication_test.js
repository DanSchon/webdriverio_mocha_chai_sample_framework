
describe('Landing Page', function() {
    describe('Login Form', function() {
        it('should authenticate user successfully when form is submitted with valid username and password', function() {
            browser.url('./login');
            console.log("1. Navigated to URL:" + browser.getUrl());

            var title = browser.getTitle();
            console.log('on page titled: ' + title);
            
            browser.setValue('#username', 'tomsmith');
            console.log('2. Entered valid username: tomsmith');
            
            browser.setValue('#password', 'SuperSecretPassword!');
            console.log('3. Entered valid password: SuperSecretPassword!');

            browser.click('.fa-sign-in');
            console.log('4. Clicked Login button');
            
            var url = browser.getUrl();
            assert.include(url, '/secure', 'User was not redirected to /secure page after attempting to authenticate with valid credentials');
            console.log('User authenticated successfully and redirected to /secure page');
        })
    })
})
