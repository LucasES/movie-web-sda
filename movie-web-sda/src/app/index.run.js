(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
