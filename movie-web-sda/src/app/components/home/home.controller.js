(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(oauthFactory) {
    var _currentPage = "#/home";

    oauthFactory.checkLoggedUser(_currentPage);
    
  }
})();
