/**
 * Created by ManTran on 6/1/2015.
 */
angular.module('learningBuddha.service.attendees', [])
    .factory('Attendees', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var attendees = [
            { firstname: 'Nicolas', lastname: 'Cage' },
            { firstname: 'Jean-Claude', lastname: 'Van Damme' },
            { firstname: 'Keanu', lastname: 'Reeves' },
            { firstname: 'Steven', lastname: 'Seagal' }
        ];

        return {
            all: function() {
                return attendees;
            },
            remove: function(attendee) {
                attendees.splice(attendees.indexOf(attendee), 1);
            },
            get: function(attendeeId) {
                for (var i = 0; i < attendees.length; i++) {
                    if (attendees[i].id === parseInt(attendeeId)) {
                        return attendees[i];
                    }
                }
                return null;
            }
        };

    });