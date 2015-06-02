/*global requirejs, document, cordova, window, navigator, console */

requirejs.config({
    paths: {
        angular:            '../lib/angular/angular.min',
        angularAnimate:     '../lib/angular-animate/angular-animate.min',
        angularSanitize:    '../lib/angular-sanitize/angular-sanitize.min',
        angularTranslate:   '../lib/angular-translate/angular-translate.min',
        uiRouter:           '../lib/angular-ui-router/release/angular-ui-router.min',
        ionic:              '../lib/ionic/js/ionic.min',
        ionicAngular:       '../lib/ionic/js/ionic-angular.min',
        text:               '../lib/text/text'
    },
    shim: {
        angular : {exports : 'angular'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        angularTranslate : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        ionicAngular: {deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize', 'angularTranslate']}
    },
    priority: [
        'angular',
        'ionic'
    ],
    deps: [
        'bootstrap'
    ]
});