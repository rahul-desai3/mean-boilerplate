'use strict';

/**
 * @ngdoc function
 * @name myclientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the myclientApp
 */
angular.module('myclientApp')
  .controller('MovieViewCtrl', function ($scope, $routeParams, Movie) {
    $scope.viewMovie = true;
    $scope.movie = Movie.one($routeParams.id).get().$object;
  });
