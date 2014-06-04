angular.module('main').controller('EntryDetails', [
  '$scope',
  '$state',

  function ($scope, $state) {
    'use strict';

    $scope.$watchCollection('entries', function (entries) {
      $scope.entry = _.find(entries, {
        id: Number($state.params.entryId)
      });
    });
  }
]);
