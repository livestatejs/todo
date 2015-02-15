(function () {
    var browser = require('./../helpers/browser.js').get();

    module.exports = {
        navigate: function () {
            return browser.url('http://localhost:8989');
        },

        NewItemInput: function () {
            var elementPromise = browser.element('#addNew');

            return {
                element: elementPromise,
                setValue: function (value) {
                    return browser.setValue('#addNew', value);
                }
            };
        },

        List: function () {
            var elementPromise = browser.element('#list');

            return {
                element: elementPromise,
                children: function () {
                    return elementPromise.then(function (element) {
                        return browser.elementIdElements(element.value.ELEMENT, 'li');
                    });
                },
                getItemByIndex: function (index) {
                    return this.children().then(function (elements) {
                        return browser.elementIdText(elements.value[index-1].ELEMENT);
                    });
                }
            };
        }
    };
}());