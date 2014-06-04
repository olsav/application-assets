angular.module('main').controller('BudgetDetails', [
  '$scope',
  '$state',

  function ($scope, $state) {
    'use strict';

    $scope.$watchCollection('budgets', function (budgets) {
      $scope.budget = _.find(budgets, {
        id: Number($state.params.budgetId)
      });
    });
  }
]);
