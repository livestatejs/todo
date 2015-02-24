var homepage = require('./../../pageObjects/homepage.js'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

module.exports = function () {
    this.Given(/^I'm on the homepage$/, function (callback) {
        homepage.navigate().should.be.fulfilled.and.notify(callback);
    });

    this.Then(/^I see the new item input field$/, function (callback) {
        homepage.NewItemInput().element.should.be.fulfilled.and.notify(callback);
    });

    this.Given(/^there is a (\d+) items long list$/, function ($length, callback) {
        homepage.List().children().should.be.fulfilled.then(function (elementSelector) {
            var error = '';
            if (elementSelector.value.length != $length) {
                error = 'Children length is ' + elementSelector.value.length + ', expected ' + $length;
            }
            callback(error);
        });
    });
    
    this.Then(/^the \#(\d+) items text is (.+)$/, function (itemIndex, expectedText, callback) {
        homepage.List().getItemByIndex(itemIndex).should.be.fulfilled.then(function (element) {
            element.value.should.equal(expectedText);
        }).should.notify(callback);
    });

    this.When(/^I add a new item with a title (.*)$/, function (title, callback) {
        homepage.NewItemInput().setValue(title + "\uE007").should.be.fulfilled.and.notify(callback);
    });
};