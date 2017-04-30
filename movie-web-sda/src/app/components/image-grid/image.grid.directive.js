(function() {
  'use strict';

angular
    .module('movieWebSda')
    .directive('imageGrid', imageGrid);

  /** @ngInject */
  function imageGrid() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/image-grid/image-grid.html'
    };

    return directive;

  }
})();