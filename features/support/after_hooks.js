var browser = require('./../../helpers/browser.js').get();

module.exports = function () {
    this.After(function (callback) {
        //browser.end();
        callback();
    });
};