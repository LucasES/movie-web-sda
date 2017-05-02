(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('ImageGridController', ImageGridController);

  /** @ngInject */
  function ImageGridController($window, $http, $cookies, apiService, oauthFactory) {    
    var vm = this;  
    vm.movies = movies;

    function movies() {
      apiService.getMovies()
        .then(function(data) {
          vm.allMovies = data;
        }).catch(function(err) {
          oauthFactory.refreshToken()
            .then(function(data){
                $http.defaults.headers.common.Authorization = 
                'Bearer ' + data.data.access_token;
                $cookies.put("access_token", data.data.access_token);
                movies();
            })
            .catch(function() {
                    $window.location.href="#/login";
            });
        });
    }
    
  }
})();
