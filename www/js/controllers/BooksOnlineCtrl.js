/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, BookService) {
        $scope.share = function(book) {
            alert('Share Item: ' + book._id);
        };

        function showBanner(index) {
            var oldElm = document.querySelector('.slider ion-slide.slider-slide.current');
            var q = '.slider ion-slide.slider-slide[data-index="' + index + '"]';
            var elm = document.querySelector(q);

            //console.log("Show banner " + index);

            // Remove class "current"
            if (null !== oldElm) {
                oldElm.classList.remove("current");
            }

            // Add class "current" to current slide
            if (null !== elm) {
                elm.classList.add("current");
            }
        }

        $scope.activeSlide = 0;

        setTimeout(function() {
            showBanner($scope.activeSlide);
        }, 100);

        $scope.slideChanged = showBanner;

        var books = BookService.query(function() {
            $scope.books = books;
        });
    }

    ctrl.$inject = ['$scope', 'BookService'];
    return ctrl;
    
});