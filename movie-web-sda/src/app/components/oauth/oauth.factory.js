(function() {
    'use strict';

    angular
        .module('movieWebSda')
        .factory('oauthFactory', oauthFactory);

    /* @ngInject */
    function oauthFactory($window, $http, $cookies, OAuthProvider) {        
        var service = {
            checkLoggedUser: checkLoggedUser,
            refreshToken: refreshToken,
            logout: logout
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

        function refreshToken() {
            var _encoded = btoa(OAuthProvider.client + ":" + OAuthProvider.secret);
            var currentToken = $cookies.get("refresh_token");

            var req = {
                method: 'POST',
                url: OAuthProvider.urlRefreshToken + currentToken,
                headers: {
                    "Authorization": "Basic " + _encoded,
                    "Accept": "application/json",
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                }               
            }

            return $http(req);            

        }

        function logout() {
            $cookies.put("access_token", "");
            $cookies.put("refresh_token", "");
            $window.location.href = "#/login";
        }
    }
})();
