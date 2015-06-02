/*global define, require */

define(['angular',
        'uiRouter',
        'config',
        'filters/filters',
        'services/services',
        'directives/directives',
        'controllers/controllers',
        'ionicAngular'],

    function (angular, uiRouter) {
        'use strict';

        var learningBuddha = angular.module('learningBuddha', [
            'ionic',
            'app.controllers',
            'app.filters',
            'app.services',
            'app.directives',
            'app.config',
            'ui.router',
            'pascalprecht.translate']);

        return learningBuddha;

    });