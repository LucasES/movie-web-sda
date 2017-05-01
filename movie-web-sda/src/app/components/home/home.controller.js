(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(oauthFactory) {
    var element = document.querySelector('body');
    var angElement = angular.element(element);
    angElement.addClass('body-class');
    
    var _currentPage = "#/home";

    oauthFactory.checkLoggedUser(_currentPage);


    
  }
})();
