'use strict';

/**
 * @ngdoc overview
 * @name yoAddressBookApp
 * @description
 * # yoAddressBookApp
 *
 * Main module of the application.
 */
angular
  .module('yoAddressBookApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact-lister', {
        templateUrl: 'views/contact-lister.html',
        controller: 'ContactListerCtrl',
        controllerAs: 'contactLister'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
