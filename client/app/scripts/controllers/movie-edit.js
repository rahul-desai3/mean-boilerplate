'use strict';

/**
 * @ngdoc function
 * @name myclientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the myclientApp
 */
angular.module('myclientApp')
  .controller('MovieEditCtrl', function ($scope, $routeParams, Movie, $location) {
    $scope.editMovie = true;
    $scope.movie = {};

    Movie.one($routeParams.id).get().then(function(movie){
    	$scope.movie = movie;
    	$scope.saveMovie = function(){
    		$scope.movie.save().then(function(){
    			$location.path(/movie/ + $routeParams.id);
    		});
    	};
    });
  });
