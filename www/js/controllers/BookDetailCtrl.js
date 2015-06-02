/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $stateParams, BookService) {
        $scope.book = BookService.get($stateParams.bookId);
    }

    ctrl.$inject = ['$scope', '$stateParams', 'BookService'];
    return ctrl;
    
});