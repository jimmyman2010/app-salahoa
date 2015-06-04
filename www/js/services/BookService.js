/*global define, console */

define(['angular'], function (angular) {
    "use strict";

    var factory = function ($resource) {
        return $resource('http://www.mantrantd.com:3000/books/:id');
    };

    factory.$inject = ['$resource'];
    return factory;
});