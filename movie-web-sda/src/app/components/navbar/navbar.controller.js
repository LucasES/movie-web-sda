(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($state, oauthFactory) {
    var vm = this;
    
    vm.goHome = goHome;
    vm.goNewBook = goNewBook;
    vm.logout = logout;

    function goHome() {
        $state.go('home');
    }
    
    function goNewBook() {
        $state.go('cadastrar');
    }

    function logout() {
        oauthFactory.logout();
    }

  }
})();

