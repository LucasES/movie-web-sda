(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .service('apiService', apiService);

  /** @ngInject */
  function apiService($http, $q, $cookies, API) {
    var currentToken = $cookies.get("access_token");

    this.getMovies =  function () {           
        var deferred = $q.defer();
        var movies = undefined;

        $http.get(API.baseUrl + API.getMovies + API.accessToken + currentToken)
          .then(function(result) {
            movies = result.data;
            deferred.resolve(movies);
          }, function(error) {
            movies = error;
            deferred.reject(error);
          });

        movies = deferred.promise;

        return $q.when(movies);
    }

    this.getAllGenre = function() {
        var deferred = $q.defer();
        var genres = undefined;

        $http.get(API.baseUrl + API.getAllGenre + API.accessToken + currentToken)
          .then(function(result) {
            genres = result.data;
            deferred.resolve(genres);
          }, function(error) {
            genres = error;
            deferred.reject(error);
          });

        genres = deferred.promise;

        return $q.when(genres);
    }

    this.getMovieById =  function (id) {           
        var deferred = $q.defer();
        var movie = undefined;

        $http.get(API.baseUrl + API.getMovies + id + "/" + API.accessToken + currentToken)
          .then(function(result) {
            movie = result.data;
            deferred.resolve(movie);
          }, function(error) {
            movie = error;
            deferred.reject(error);
          });

        movie = deferred.promise;

        return $q.when(movie);
    }

    this.saveMovie =  function (data) {           
        var deferred = $q.defer();
        var movieSaved = undefined;

        $http.post(API.baseUrl + API.getMovies + API.accessToken + currentToken, angular.toJson(data))
          .then(function(result) {
            movieSaved = result.data;
            deferred.resolve(movieSaved);
          }, function(error) {
            movieSaved = error;
            deferred.reject(error);
          });

        movieSaved = deferred.promise;

        return $q.when(movieSaved);
    }

    this.deleteMovieById = function(id) {
        var deferred = $q.defer();
        var movieDeleted = undefined;

        $http.delete(API.baseUrl + API.getMovies + id + "/" + API.accessToken + currentToken)
          .then(function(result) {
            movieDeleted = result.data;
            deferred.resolve(movieDeleted);
          }, function(error) {
            movieDeleted = error;
            deferred.reject(error);
          });

        movieDeleted = deferred.promise;

        return $q.when(movieDeleted);
    }
  }
})();