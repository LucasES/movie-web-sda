(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .service('loginService', loginService);

  /** @ngInject */
  function loginService($window, $http, $httpParamSerializer, $cookies, OAuthProvider) {
    var _encoded = btoa(OAuthProvider.client + ":" + OAuthProvider.secret);

    var _login =  function login(login, password) {   
        var _data = {
            grant_type: OAuthProvider.grantTypePassword, 
            username: login, 
            password: password
        };
        var req = {
            method: 'POST',
            url: OAuthProvider.url,
            headers: {
                "Authorization": "Basic " + _encoded,
                "Accept": "application/json",
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer(_data)
        }
        
        function loginSuccess(data) {
             $http.defaults.headers.common.Authorization = 
              'Bearer ' + data.data.access_token;
            $cookies.put("access_token", data.data.access_token);
            $window.location.href="#/home";
        }

        function loginFail(error) {
            $log.error('Falha ao realizar o login');
        }

        return $http(req)
            .then(loginSuccess)
            .catch(loginFail);   
    }

    return {
        login: _login
    };

  }
})();