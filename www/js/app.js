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
            'learningBuddha.controllers',
            'learningBuddha.filters',
            'learningBuddha.services',
            'learningBuddha.directives',
            'learningBuddha.config',
            'ui.router',
            'pascalprecht.translate',
            'ngResource']);

        return learningBuddha;

    });