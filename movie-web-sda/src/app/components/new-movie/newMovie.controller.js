(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('NewMovieController', NewMovieController);

  /** @ngInject */
  function NewMovieController($document, $timeout, $window, $http, $cookies, apiService, oauthFactory) {
    var vm = this;

    var _currentPage = "/home/cadastrar";

    oauthFactory.checkLoggedUser(_currentPage);

    var angElement = angular.element($document).find('body');
    angElement.addClass('body-class-white');

    vm.getAllGenre = getAllGenre;
    vm.save = save;
    vm.genre = {};

    function getAllGenre() {
      apiService.getAllGenre()
        .then(function(data) {
          vm.allGenre = data;
        }).catch(function() {
          oauthFactory.refreshToken()
            .then(function(data){
                $http.defaults.headers.common.Authorization = 
                'Bearer ' + data.data.access_token;
                $cookies.put("access_token", data.data.access_token);
                getAllGenre();
            })
            .catch(function() {
                $window.location.href="#/login";
            });
        });
    }

    function save(movie) {
      apiService.saveMovie(movie)
        .then(function() {
          $timeout(function(){ 
            vm.movie = {};
            vm.formMovie.$setPristine();
            vm.formMovie.$setUntouched();
          });
        }).catch(function() {
          oauthFactory.refreshToken()
            .then(function(data){
                $http.defaults.headers.common.Authorization = 
                'Bearer ' + data.data.access_token;
                $cookies.put("access_token", data.data.access_token);
                getAllGenre();
            })
            .catch(function() {
                $window.location.href="#/login";
            });
        });
    }

  }
})();
