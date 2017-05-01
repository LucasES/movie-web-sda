(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .service('loginService', loginService);

  /** @ngInject */
  function loginService($http, $httpParamSerializer, OAuthProvider) {
    var _encoded = btoa(OAuthProvider.client + ":" + OAuthProvider.secret);

    this.login =  function login(login, password) {           
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

        return $http(req);   
    }
  }
})();