var assert = require('chai').assert;

describe('Navigation', function() {
    describe('Shop Button', function() {
        it('should redirect to /product-page when clicked', function() {
            browser.url('./');
            console.log("1. Navigated to URL:" + browser.getUrl());

            var title = browser.getTitle();
            console.log('on page titled: ' + title);

            browser.click('.shop-callout a');
            console.log('2. Clicked Shop button');

            var title2 = browser.getTitle();
            console.log('on page titled:' + title2);
            
            var url = browser.getUrl();
            console.log('shop button redirected user to: ' + url);

            assert.include(url, '/product-page.html', 'Shop button did not redirect user to expected url');
        })
    })
})
