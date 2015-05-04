'use strict';

/**
 * @ngdoc function
 * @name myclientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the myclientApp
 */
angular.module('myclientApp')
.controller('MoviesCtrl', function ($scope, Movie) {
  $scope.movies = Movie.getList().$object;
});