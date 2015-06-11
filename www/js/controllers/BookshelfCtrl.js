/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, BookService) {
        var books = BookService.query(function() {
            $scope.books = books;
        });
    }

    ctrl.$inject = ['$scope', 'BookService'];
    return ctrl;
    
});