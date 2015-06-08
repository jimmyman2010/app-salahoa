/*global define, require */

define(['app'], function (SALA) {
    'use strict';

    SALA.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/layouts/login.html",
                controller: 'LoginCtrl'
            })

            .state('home', {
                url: "/home",
                abstract: true,
                templateUrl: "templates/layouts/home.html"
            })
            .state('home.books-online', {
                url: '/books-online',
                views: {
                    'home': {
                        templateUrl: 'templates/home/books-online.html',
                        controller: 'BooksOnlineCtrl'
                    }
                }
            })

            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "templates/layouts/main.html"
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

            .state('page', {
                url: "/page",
                abstract: true,
                templateUrl: 'templates/layouts/page.html',
                controller: 'PageCtrl'
            })
            .state('page.setting', {
                url: '/setting',
                views: {
                    'page': {
                        templateUrl: 'templates/pages/setting.html'
                    }
                }
            })
            .state('page.about', {
                url: '/about',
                views: {
                    'page': {
                        templateUrl: 'templates/pages/about.html'
                    }
                }
            });

        $urlRouterProvider.otherwise("/login");

    });

});