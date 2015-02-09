var webdriverio = require('webdriverio'),
    options = { desiredCapabilities: { browserName: 'phantomjs' } };

(function () {
    var instance;

    module.exports = {
        get: function () {
            if (instance) {
                return instance;
            } else {
                return instance = webdriverio.remote(options).init();
            }
        }
    };
}());


