/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, BookService) {
        $scope.pets = BookService.all();
    }

    ctrl.$inject = ['$scope', 'BookService'];
    return ctrl;
    
});