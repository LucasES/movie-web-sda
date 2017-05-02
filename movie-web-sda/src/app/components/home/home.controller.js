(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($document, oauthFactory) {
    var angElement = angular.element($document).find('body');
    angElement.addClass('body-class');
    
    var _currentPage = "#/home";

    oauthFactory.checkLoggedUser(_currentPage);


    
  }
})();
