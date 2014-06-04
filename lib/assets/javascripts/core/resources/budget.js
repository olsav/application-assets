angular.module('core').factory('Budget', [
  '$resource',

  function ($resource) {
    'use strict';

    return $resource('data/budgets/:budgetId.json', {
      budgetId: '@id'
    }, {
      query: {
        isArray: true,
        cache: true
      },

      update: {
        method: 'PUT'
      }
    });
  }
]);
