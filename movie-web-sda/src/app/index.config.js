(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .config(config);

  /** @ngInject */
  function config($locationProvider, $logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Disable # on url
    $locationProvider.html5Mode(true);
  }

})();
