'use strict';

describe('Controller: ContactListerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAddressBookApp'));

  var ContactListerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactListerCtrl = $controller('ContactListerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactListerCtrl.awesomeThings.length).toBe(3);
  });
});
