(function() {
    'use strict';

    angular
        .module('movieWebSda')
        .factory('oauthFactory', oauthFactory);

    /* @ngInject */
    function oauthFactory($window, $http, $cookies) {        
        var service = {
            checkLoggedUser: checkLoggedUser
        };

        return service;


        function checkLoggedUser(currentPage) {
            var isLoginPage = $window.location.href.indexOf("login") != -1;
            
            if(isLoginPage){
                if($cookies.get("access_token")){
                  $window.location.href = currentPage;
              }
            } else{
              if($cookies.get("access_token")){
                  $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get("access_token");
              } else{
                 $window.location.href = "#/login";
                }
            } 
        }
    }
})();