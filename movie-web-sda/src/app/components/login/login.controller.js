(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(loginService) {
    var vm = this;    
    
    vm.login = login;

    function login () {
      return loginService.login(vm.username, vm.password);
    }
  }
})();
