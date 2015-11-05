
angular.module('contactAjouter', ['contactService', 'bootstrapFlashAlert'])
    .controller('ContactAjouterCtrl', [
        '$scope',
        'Contact',
        '$location',
        'flashMessenger',
        function($scope, Contact, $location, flashMessenger) {

        $scope.ajouter = function() {
            var newContact = new Contact({
                prenom: $scope.newContact.prenom,
                nom: $scope.newContact.nom
            });

            newContact.$save(function() {
                flashMessenger.set('Vous venez d\'ajouter ' + newContact.prenom);
                $location.path('/');
            });
        };

    }]);