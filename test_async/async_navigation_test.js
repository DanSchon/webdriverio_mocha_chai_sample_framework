describe('Navigation', function() {
    describe('Shop Button', function() {
        it('should redirect to /products page when clicked', function() {
            return browser
                .url('./')
                .getTitle().then(function(title) {
                    console.log('Title: ' + title);
                })
                .click('.shop-callout a')
                .getTitle().then(function(title) {
                    console.log('Title is:' + title);
                })
                .getUrl().then(function(url) {
                    console.log('Url: ' + url);
                })
        })
    })
})