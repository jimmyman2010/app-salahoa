/*global define, console */

define(function () {
    'use strict';

    function ctrl($scope, $state) {

        $scope.login = function () {
            $state.go('main.books-online');
        };
        
    }

    ctrl.$inject = ['$scope', '$state'];
    return ctrl;
    
});