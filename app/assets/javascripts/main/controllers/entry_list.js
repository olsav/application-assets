angular.module('main').controller('EntryList', [
  '$scope',
  '$state',
  'Entry',

  function ($scope, $state, Entry) {
    'use strict';

    $scope.entries = Entry.query();
  }
]);
