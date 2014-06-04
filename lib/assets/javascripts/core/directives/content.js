angular.module('core').directive('content', [
  function () {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'assets/templates/core/partials/content.html',
      replace: true
    };
  }
]);
