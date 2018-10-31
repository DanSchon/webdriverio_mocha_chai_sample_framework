
describe('Landing Page', function() {
    describe('Login Form', function() {
        it('should authenticate user successfully when form is submitted with valid username and password', function() {
            return browser
                .url('./login')
                .getTitle().then(function(title) {
                    console.log('Title: ' + title);
                })         
                .setValue('#username', 'tomsmith')
                .setValue('#password', 'SuperSecretPassword!')
                .click('.fa-sign-in')
                .getUrl().then(function(url) {
                    assert.include(url, '/secure', 'User was not redirected to /secure page after attempting to authenticate with valid credentials');
                })
        })
    })
})
