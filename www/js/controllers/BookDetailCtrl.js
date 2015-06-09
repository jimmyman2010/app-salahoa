/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $stateParams, BookService, $cordovaNativeAudio, $timeout) {

        var book = BookService.get({ id: $stateParams.bookId }, function() {
            $scope.book = book;
        });

        /*$cordovaNativeAudio
            .preloadSimple('click', 'audio/Em-Khong-Quay-Ve-Hoang-Ton-Yanbi.mp3')
            .then(function (msg) {
                console.log(msg);
            }, function (error) {
                alert(error);
            });*/

        $cordovaNativeAudio
            .preloadComplex('music', 'audio/Em-Khong-Quay-Ve-Hoang-Ton-Yanbi.mp3', 1, 1)
            .then(function (msg) {
                console.log(msg);
            }, function (error) {
                console.error(error);
            });

        $scope.play = function () {
            //$cordovaNativeAudio.play('click');
            $cordovaNativeAudio.loop('music');

            // stop 'music' loop and unload
            $timeout(function () {
                $cordovaNativeAudio.stop('music');

                //$cordovaNativeAudio.unload('click');
                //$cordovaNativeAudio.unload('music');
            }, 5000 * 60);
        };
    }

    ctrl.$inject = ['$scope', '$stateParams', 'BookService', '$cordovaNativeAudio', '$timeout'];
    return ctrl;
    
});