/*global define, require, console, cordova, navigator */

define(['ionic', 'angular', 'app', 'routes', 'translates'], function (ionic, angular, app) {
    'use strict';

    var $html,
        onPause = function() {
            if(SALA.media && SALA.mediaPlayOnResume === 1) {
                SALA.media.pause();
            }
        },
        onResume = function() {
            if(SALA.media && SALA.mediaPlayOnResume === 1) {
                SALA.media.play();
            }
        },
        onDeviceReady = function () {

            var url = SALA.helper.getFilePath('audio/startup.mp3');
            var media = new Media(url,
                // success callback
                function () { console.log("playAudio():Audio Success"); },
                // error callback
                function (err) { console.log("playAudio():Audio Error: " + err); }
            );
            // Play audio
            media.play();

            angular.bootstrap(document, [app.name]);
            document.addEventListener("pause", onPause, false);
            document.addEventListener("resume", onResume, false);
        };

    document.addEventListener("deviceready", onDeviceReady, false);

    if (typeof cordova === 'undefined') {
        $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function () {
            try {
                angular.bootstrap(document, [app.name]);
            } catch (e) {
                console.error(e.stack || e.message || e);
            }
        });
    }
    
});