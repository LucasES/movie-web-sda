(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('cadastrar', {
        url: '/home/cadastrar',
        templateUrl: 'app/components/new-book/new-book.html',
        controller: 'NewBookController',
        controllerAs: 'newBook'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
