/*global define, require */

define(['app'], function (learningBuddha) {
    'use strict';

    learningBuddha.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/layouts/login.html",
                controller: 'LoginCtrl'
            })

            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "templates/layouts/main.html"
            })
            .state('main.books-online', {
                url: '/books-online',
                views: {
                    'main': {
                        templateUrl: 'templates/main/books-online.html',
                        controller: 'BooksOnlineCtrl'
                    }
                }
            })
            .state('main.book-detail', {
                url: '/book-detail/:bookId',
                views: {
                    'main': {
                        templateUrl: 'templates/main/book-detail.html',
                        controller: 'BookDetailCtrl'
                    }
                }
            })

            .state('setting', {
                url: "/setting",
                abstract: true,
                templateUrl: 'templates/layouts/setting.html'
            })
            .state('setting.general', {
                url: '/general',
                views: {
                    'general-tab': {
                        templateUrl: 'templates/settings/general.html'
                    }
                }
            })
            .state('setting.about', {
                url: '/about',
                views: {
                    'about-tab': {
                        templateUrl: 'templates/settings/about.html'
                    }
                }
            });

        $urlRouterProvider.otherwise("/login");

    });

});