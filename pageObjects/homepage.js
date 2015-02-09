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
            return getElement('#addNew');
        },

        getList: function () {
            var element = getElement('#list');

            return {
                element: element,
                children: function () {
                    var deferred = q.defer();

                    element.then(function (element) {
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