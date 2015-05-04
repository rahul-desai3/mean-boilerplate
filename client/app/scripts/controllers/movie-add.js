'use strict';

/**
 * @ngdoc function
 * @name myclientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the myclientApp
 */
angular.module('myclientApp')
  .controller('MovieAddCtrl', function ($scope, Movie, $location) {
    $scope.movie = {};
    $scope.saveMovie = function(){
    	Movie.post($scope.movie).then(function(){
    		$location.path('/movies');
    	});
    };
  });
