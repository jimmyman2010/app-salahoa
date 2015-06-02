/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, BookService) {
        $scope.data = {
            showDelete: false
        };

        $scope.share = function(book) {
            alert('Share Item: ' + book.id);
        };

        $scope.books = BookService.all();
    }

    ctrl.$inject = ['$scope', 'BookService'];
    return ctrl;
    
});