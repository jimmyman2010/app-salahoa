/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $stateParams, BookService, $ionicPlatform, $cordovaMedia, $cordovaDevice) {

        var book = BookService.get({ id: $stateParams.bookId }, function() {
            $scope.book = book;
        });

        $scope.play = function() {
            if(SALA.media) {
                SALA.media.release();
                SALA.mediaPlayOnResume = 0;
            }

            $ionicPlatform.ready(function() {

                var src = SALA.helper.getFilePath('audio/Em-Khong-Quay-Ve-Hoang-Ton-Yanbi.mp3');

                // create media promise
                SALA.media = $cordovaMedia.newMedia(src);

                // promise completion
                SALA.media.then(function() {
                    // success
                }, function () {
                    // error
                });
            });

            if($cordovaDevice.getPlatform() === 'iOS') {
                SALA.media.play({
                    playAudioWhenScreenIsLocked : true
                });
            }
            else {
                SALA.media.play();
            }
            SALA.mediaPlayOnResume = 1;
        };

        $scope.pause = function() {
            if(SALA.media) {
                SALA.media.pause();
                SALA.mediaPlayOnResume = 0;
            }
        };

        $scope.stop = function() {
            if(SALA.media) {
                SALA.media.stop();
                SALA.mediaPlayOnResume = 0;
            }
        };

        $scope.resume = function() {
            if(SALA.media) {
                SALA.media.play();
                SALA.mediaPlayOnResume = 1;
            }
        };
    }

    ctrl.$inject = ['$scope', '$stateParams', 'BookService', '$ionicPlatform', '$cordovaMedia', '$cordovaDevice'];
    return ctrl;
    
});