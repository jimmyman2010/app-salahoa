/**
 * Created by ManTran on 6/9/2015.
 */
define(function () {
    'use strict';

    function ctrl($scope, $state, $cordovaDevice, $cordovaAppAvailability, $cordovaEmailComposer) {

        $scope.openTwitter = function(){
            var schemeTw;
            var platform = $cordovaDevice.getPlatform();
            if(platform === 'iOS') {
                schemeTw = 'twitter://';
            }
            else if(platform === 'Android') {
                schemeTw = 'com.twitter.android';
            }

            $cordovaAppAvailability.check(schemeTw)
                .then(function() {
                    window.open('twitter://user?screen_name=jimmyman2010', '_system', 'location=no');
                }, function () {
                    window.open('https://twitter.com/jimmyman2010', '_system', 'location=no');
                });
        };

        $scope.openFacebook = function(){
            var schemeTw;
            var platform = $cordovaDevice.getPlatform();
            if(platform === 'iOS') {
                schemeTw = 'fb://';
            }
            else if(platform === 'Android') {
                schemeTw = 'com.facebook.katana';
            }

            $cordovaAppAvailability.check(schemeTw)
                .then(function() {
                    window.open('fb://profile?id=100000156353388', '_system', 'location=no');
                }, function () {
                    window.open('https://www.facebook.com/jimmyman2010', '_system', 'location=no');
                });
        };

        $scope.openWebsite = function(){
            window.open('http://www.mantrantd.com', '_system', 'location=no');
        };

        $scope.openPhone = function(){
            window.open('tel:+84 908 036 105', '_system', 'location=no');
        };

        $scope.openMail = function(){
            var email = {
                to: 'tranduyminhman@gmail.com',
                attachments: [
                    //'file://img/logo.png'
                ],
                subject: '[SALA] Liên hệ',
                body: 'How are you? Nice greetings from Leipzig',
                isHtml: true
            };

            $cordovaEmailComposer.open(email).then(null, function () {
                // user cancelled email
            });
        };

    }

    ctrl.$inject = ['$scope', '$state', '$cordovaDevice', '$cordovaAppAvailability', '$cordovaEmailComposer'];
    return ctrl;

});