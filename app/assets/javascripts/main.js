angular.module('main', ['core']).config([
  '$stateProvider',
  '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'assets/templates/main/views/dashboard.html',
        controller: 'Dashboard'
      })

      .state('entries', {
        url: '/entries',
        templateUrl: 'assets/templates/main/views/entry_list.html',
        controller: 'EntryList'
      })

      .state('entries.details', {
        url: '/:entryId',

        views: {
          'details': {
            templateUrl: 'assets/templates/main/views/entry_details.html',
            controller: 'EntryDetails'
          }
        }
      })

      .state('budgets', {
        url: '/budgets',
        templateUrl: 'assets/templates/main/views/budget_list.html',
        controller: 'BudgetList'
      })

      .state('budgets.details', {
        url: '/:budgetId',

        views: {
          'details': {
            templateUrl: 'assets/templates/main/views/budget_details.html',
            controller: 'BudgetDetails'
          }
        }
      });

    $urlRouterProvider.otherwise('/dashboard');
  }
]);
