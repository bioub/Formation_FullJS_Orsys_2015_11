
angular.module('contactLister', ['contactService'])
    .controller('ContactListerCtrl', ['$scope', 'Contact', function($scope, Contact) {

        $scope.contacts = Contact.query();

        $scope.delete = function(contact, i) {
            contact.$delete(function(contact, getHeaders) {
                console.log(getHeaders());
                $scope.contacts.splice(i, 1);
            });
        };
    }]);