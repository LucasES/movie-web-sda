(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
