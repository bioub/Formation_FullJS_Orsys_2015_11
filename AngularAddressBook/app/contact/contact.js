
angular.module('contact', [
    'ngRoute',
    'contactAjouter',
    'contactLister'
])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/contact/views/ContactLister.html',
            controller: 'ContactListerCtrl',
        })
        .when('/ajouter', {
            templateUrl: 'app/contact/views/ContactAjouter.html',
            controller: 'ContactAjouterCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

