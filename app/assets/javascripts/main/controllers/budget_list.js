angular.module('main').controller('BudgetList', [
  '$scope',
  '$state',
  'Budget',

  function ($scope, $state, Budget) {
    'use strict';

    $scope.budgets = Budget.query();
  }
]);
