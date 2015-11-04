(function() {
    "use strict";

    var addressBookModule = angular.module('addressBookModule', ['ngResource']);

    addressBookModule.factory('Contact', ['$resource', function($resource) {
        return $resource('http://localhost:3000/api/v1/contacts/:contactId', {contactId:'@id'});

    }]);

    addressBookModule.controller('ContactCtrl', ['$scope', 'Contact', function($scope, Contact) {

        $scope.contacts = Contact.query();

        $scope.ajouter = function() {
            var newContact = new Contact({
                prenom: $scope.newContact.prenom,
                nom: $scope.newContact.nom
            });

            newContact.$save(function() {
                $scope.contacts.push(newContact);
            });
        };
    }]);
}());