/**
 * Created by ManTran on 6/3/2015.
 */
define(function () {
    'use strict';

    function ctrl($scope, $state, $cordovaDevice, $cordovaAppAvailability, $cordovaEmailComposer, $cordovaInAppBrowser) {

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
                    $cordovaInAppBrowser.open('twitter://user?screen_name=jimmyman2010', '_system');
                }, function () {
                    $cordovaInAppBrowser.open('https://twitter.com/jimmyman2010');
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
                    $cordovaInAppBrowser.open('fb://profile?id=100000156353388', '_system');
                }, function () {
                    $cordovaInAppBrowser.open('https://www.facebook.com/jimmyman2010');
                });
        };

        $scope.openWebsite = function(){
            $cordovaInAppBrowser.open('http://www.mantrantd.com');
        };

        $scope.openPhone = function(){
            $cordovaInAppBrowser.open('tel:+84 908 036 105');
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

    ctrl.$inject = ['$scope', '$state', '$cordovaDevice', '$cordovaAppAvailability', '$cordovaEmailComposer', '$cordovaInAppBrowser'];
    return ctrl;

});