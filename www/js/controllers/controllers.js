/*global define, require */

define(function (require) {

    'use strict';

    var angular = require('angular'),
        services = require('services/services'),
        config = require('config'),
        controllers = angular.module('learningBuddha.controllers', ['learningBuddha.services', 'learningBuddha.config']);

    controllers.controller('LoginCtrl', require('controllers/LoginCtrl'));
    controllers.controller('BooksOnlineCtrl', require('controllers/BooksOnlineCtrl'));
    controllers.controller('BookDetailCtrl', require('controllers/BookDetailCtrl'));
    
    controllers.run(['$rootScope', function ($rootScope) {
        $rootScope.sampleParam = "value";
    }]);
    
    return controllers;

});