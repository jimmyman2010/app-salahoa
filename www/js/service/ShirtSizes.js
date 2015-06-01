/**
 * Created by ManTran on 6/1/2015.
 */
angular.module('learningBuddha.service.shirtSizes', [])
    .factory('ShirtSizes', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var shirtSizes = [
            { text: 'Large', value: 'L' },
            { text: 'Medium', value: 'M' },
            { text: 'Small', value: 'S' }
        ];

        return {
            all: function() {
                return shirtSizes;
            },
            remove: function(shirtSize) {
                shirtSizes.splice(shirtSizes.indexOf(shirtSize), 1);
            },
            get: function(shirtSizeId) {
                for (var i = 0; i < shirtSizes.length; i++) {
                    if (shirtSizes[i].id === parseInt(shirtSizeId)) {
                        return shirtSizes[i];
                    }
                }
                return null;
            }
        };

    });