/*global define, require */

define(function (require) {

    'use strict';

    var angular = require('angular'),
        services = require('services/services'),
        config = require('config'),
        controllers = angular.module('SALA.controllers', ['SALA.services', 'SALA.config']);

    controllers.controller('LoginCtrl', require('controllers/LoginCtrl'));
    controllers.controller('HomeCtrl', require('controllers/HomeCtrl'));
    controllers.controller('MainCtrl', require('controllers/MainCtrl'));
    controllers.controller('PageCtrl', require('controllers/PageCtrl'));
    controllers.controller('BooksOnlineCtrl', require('controllers/BooksOnlineCtrl'));
    controllers.controller('BookshelfCtrl', require('controllers/BookshelfCtrl'));
    controllers.controller('BookDetailCtrl', require('controllers/BookDetailCtrl'));
    
    controllers.run(['$rootScope', function ($rootScope) {
        $rootScope.sampleParam = "value";
    }]);
    
    return controllers;

});