describe('Navigation', function() {
    describe('Shop Button', function() {
        it('should redirect to /products page when clicked', function() {
            browser.url('./');
            console.log("1. Navigated to URL:" + browser.getUrl());

            var title = browser.getTitle();
            console.log('Page title: ' + title);

            browser.click('.shop-callout a');
            console.log('2. Clicked Shop button');

            var title2 = browser.getTitle();
            console.log('Page Title:' + title2);
            
            var url = browser.getUrl();
            console.log('Url: ' + url);
        })
    })
})