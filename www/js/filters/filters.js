/*global define */

define(['angular', 'filters/InterpolateFilter', 'services/services'],
    function (angular, InterpolateFilter) {
        'use strict';
        
        var filters = angular.module('learningBuddha.filters', ['learningBuddha.services']);
        filters.filter('interpolate', InterpolateFilter);
        return filters;
 
    });