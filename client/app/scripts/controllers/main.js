'use strict';

/**
 * @ngdoc function
 * @name myclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myclientApp
 */
angular.module('myclientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
