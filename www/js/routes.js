/*global define, require */

define(['app'], function (learningBuddha) {
    'use strict';

    learningBuddha.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/pages/login.html",
                controller: 'LoginCtrl'
            })

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/pages/tabs.html"
            })
            .state('tab.pet-index', {
                url: '/pets',
                views: {
                    'pets-tab': {
                        templateUrl: 'templates/tabs/pet-index.html',
                        controller: 'PetIndexCtrl'
                    }
                }
            })
            .state('tab.pet-detail', {
                url: '/pet/:petId',
                views: {
                    'pets-tab': {
                        templateUrl: 'templates/tabs/pet-detail.html',
                        controller: 'PetDetailCtrl'
                    }
                }
            })
            .state('tab.adopt', {
                url: '/adopt',
                views: {
                    'adopt-tab': {
                        templateUrl: 'templates/tabs/adopt.html'
                    }
                }
            })
            .state('tab.about', {
                url: '/about',
                views: {
                    'about-tab': {
                        templateUrl: 'templates/tabs/about.html'
                    }
                }
            });

        $urlRouterProvider.otherwise("/login");

    });

});