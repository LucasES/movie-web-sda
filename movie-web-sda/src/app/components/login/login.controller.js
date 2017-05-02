(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $window, $http, $cookies, loginService) {
    var vm = this;    
    vm.dataLoading = false;
    vm.login = login;

    function login () {
      vm.dataLoading = true;
      return loginService.login(vm.username, vm.password)
        .then(function(data) {
            vm.dataLoading = false;
            $http.defaults.headers.common.Authorization = 
            'Bearer ' + data.data.access_token;
            $cookies.put("access_token", data.data.access_token);
            $cookies.put("refresh_token", data.data.refresh_token);
            $window.location.href="#/home";
        }).catch(function() {
           vm.dataLoading = false; 
           $log.error('Falha ao realizar o login');
        });
    }
  }
})();
