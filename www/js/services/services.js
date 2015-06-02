/*global define */

define(function (require) {
    
    'use strict';
    
    var angular = require('angular'),
        config = require('config'),
        services = angular.module('learningBuddha.services', ['learningBuddha.config']);
    
    services.factory('BookService', require('services/BookService'));
    
    return services;

});