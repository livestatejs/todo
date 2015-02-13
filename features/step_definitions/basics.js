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
        homepage.addNewItemInput().element.should.be.fulfilled.and.notify(callback);
    });

    this.Given(/^there is an empty list$/, function (callback) {
        homepage.getList().children().should.be.fulfilled.then(function (elementSelector) {
            var error = '';
            if (elementSelector.value.length > 0) {
                error = 'Children length is ' + elementSelector.value.length + ', expected 0';
            }
            callback(error);
        });
    });

    this.When(/^I add a new item$/, function (callback) {
        homepage.addNewItemInput().setValue("Testing\uE007").should.be.fulfilled.and.notify(callback);
    });

    this.Then(/^I can see the new item added to the list$/, function (callback) {
        homepage.getList().children().should.be.fulfilled.then(function (elementSelector) {
            var error = '';
            if (elementSelector.value.length !== 1) {
                callback('Children length is ' + elementSelector.value.length + ', expected 1');
            } else {
                callback();
            }
        });
    });
};