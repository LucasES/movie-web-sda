(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('MovieDescriptionController', MovieDescriptionController);

  /** @ngInject */
  function MovieDescriptionController($http, $window, $cookies, apiService, $document, $stateParams, oauthFactory ) {
    var vm = this;

    var angElement = angular.element($document).find('body');
    angElement.addClass('body-class-white');

    var _currentId = $stateParams.movieId;
    vm.movieById = movieById;
    vm.deleteMovie = deleteMovie;

    function movieById() {
      apiService.getMovieById(_currentId)
        .then(function(data) {
          vm.currentMovie = data;
        }).catch(function() {
          oauthFactory.refreshToken()
            .then(function(data){
                $http.defaults.headers.common.Authorization = 
                'Bearer ' + data.data.access_token;
                $cookies.put("access_token", data.data.access_token);
                movieById(_currentId);
            })
            .catch(function() {
                $window.location.href="#/login";
            });
        });
    }

    function deleteMovie(id) {
      apiService.deleteMovieById(id)
        .then(function() {
          $window.location.href="#/home";
        }).catch(function() {
          oauthFactory.refreshToken()
            .then(function(data){
                $http.defaults.headers.common.Authorization = 
                'Bearer ' + data.data.access_token;
                $cookies.put("access_token", data.data.access_token);
                movieById(_currentId);
            })
            .catch(function() {
                $window.location.href="#/login";
            });
        });
    }
  }
})();
