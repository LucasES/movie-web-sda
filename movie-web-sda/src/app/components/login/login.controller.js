(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(loginService) {
    var vm = this;    
    
    vm.login = loginService.login();
  }
})();
