(function () {
    var browser = require('./../helpers/browser.js').get(),
        q = require('q');


    function getElement (selector) {
        var deferred = q.defer();

        browser.element(selector, function (error, element) {
            if (error) {
                deferred.reject(new Error(error));
            } else {
                deferred.resolve(element);
            }
        });

        return deferred.promise;
    }

    module.exports = {
        navigate: function () {
            var deferred = q.defer();

            browser.url('http://localhost:8989', function () {
                deferred.resolve();
            });

            return deferred.promise;
        },

        addNewItemInput: function () {
            var elementPromise = getElement('#addNew');

            return {
                element: elementPromise,
                setValue: function (value) {
                    var deferred = q.defer();

                    browser.setValue('#addNew', value, function () {
                        deferred.resolve();
                    });

                    return deferred.promise;
                }
            }
        },

        getList: function () {
            var elementPromise = getElement('#list');

            return {
                element: elementPromise,
                children: function () {
                    var deferred = q.defer();

                    elementPromise.then(function (element) {
                        browser.elementIdElements(element.value.ELEMENT, 'li', function (error, element) {
                            if (error) {
                                deferred.reject(new Error(error));
                            } else {
                                deferred.resolve(element);
                            }
                        });
                    });

                    return deferred.promise;
                }
            };
        }
    };
}());