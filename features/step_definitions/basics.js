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
        homepage.addNewItemInput().should.be.fulfilled.and.notify(callback);
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
};