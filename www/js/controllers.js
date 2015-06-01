angular.module('learningBuddha.singleController', [])

    .controller('CheckinCtrl', function($scope) {
        $scope.showForm = true;

        $scope.shirtSizes = [
            { text: 'Large', value: 'L' },
            { text: 'Medium', value: 'M' },
            { text: 'Small', value: 'S' }
        ];

        $scope.attendee = {};
        $scope.submit = function() {
            if(!$scope.attendee.firstname) {
                alert('Info required');
                return;
            }
            $scope.showForm = false;
            $scope.attendees.push($scope.attendee);
        };

    })

    .controller('AttendeesCtrl', function($scope) {
        $scope.attendees = [
            { firstname: 'Nicolas', lastname: 'Cage' },
            { firstname: 'Jean-Claude', lastname: 'Van Damme' },
            { firstname: 'Keanu', lastname: 'Reeves' },
            { firstname: 'Steven', lastname: 'Seagal' }
        ];

        $scope.activity = [];
        $scope.arrivedChange = function(attendee) {
            var msg = attendee.firstname + ' ' + attendee.lastname;
            msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
            msg += new Date().getMilliseconds();
            $scope.activity.push(msg);
            if($scope.activity.length > 3) {
                $scope.activity.splice(0, 1);
            }
        };

    })
;

angular.module('learningBuddha.controllers', ['learningBuddha.singleController'])

    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
;
