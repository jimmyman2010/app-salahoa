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

        var SALA = angular.module('SALA', [
            'ionic',
            'SALA.controllers',
            'SALA.filters',
            'SALA.services',
            'SALA.directives',
            'SALA.config',
            'ui.router',
            'pascalprecht.translate',
            'ngResource',
            'ngCordova'
        ]);

        return SALA;

    });