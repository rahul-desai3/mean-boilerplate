'use strict';

describe('Controller: MovieEditCtrl', function () {

  // load the controller's module
  beforeEach(module('myclientApp'));

  var MovieEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieEditCtrl = $controller('MovieEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});