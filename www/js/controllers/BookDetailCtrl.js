/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $stateParams, BookService) {

        var book = BookService.get({ id: $stateParams.bookId }, function() {
            $scope.book = book;
        });

    }

    ctrl.$inject = ['$scope', '$stateParams', 'BookService'];
    return ctrl;
    
});