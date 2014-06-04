angular.module('core').factory('Entry', [
  '$resource',

  function ($resource) {
    'use strict';

    return $resource('data/entries/:entryId.json', {
      entryId: '@id'
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
