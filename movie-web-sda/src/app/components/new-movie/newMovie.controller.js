(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('NewMovieController', NewMovieController);

  /** @ngInject */
  function NewMovieController($timeout, $window, $http, $cookies, apiService, oauthFactory) {
    var vm = this;

    var _currentPage = "/home/cadastrar";

    oauthFactory.checkLoggedUser(_currentPage);

    var element = document.querySelector('body');
    var angElement = angular.element(element);
    angElement.addClass('body-class-white');

    vm.getAllGenre = getAllGenre;
    vm.save = save;
    vm.genre = {};

    function getAllGenre() {
      apiService.getAllGenre()
        .then(function(data) {
          vm.allGenre = data;
        }).catch(function(err) {
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
        .then(function(data) {
          $timeout(function(){ 
            vm.movie = {};
            vm.formMovie.$setPristine();
            vm.formMovie.$setUntouched();
          });
        }).catch(function(err) {
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
