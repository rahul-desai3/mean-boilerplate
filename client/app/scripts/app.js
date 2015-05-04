'use strict';

/**
 * @ngdoc overview
 * @name myclientApp
 * @description
 * # myclientApp
 *
 * Main module of the application.
 */
angular
  .module('myclientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular){  // just for replacing _id in Mongoose response to id
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular){  // for the ability to create movie
    return MovieRestangular.service('movie');    // points to url /movie in API
  })
  .directive('youtube', function(){
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    }
  })
  .filter('trusted', function($sce){
    return function(url){
      return $sce.trustAsResourceUrl(url);
    }
  });
