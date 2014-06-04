angular.module('core').factory('Currency', [
  '$resource',

  function ($resource) {
    'use strict';

    return $resource('data/currencies/:currencyId.json', {
      currencyId: '@id'
    }, {
      query: {
        isArray: true,
        cache: true,

        transformResponse: function (data) {
          var object = JSON.parse(data);

          return _.map(object, function (value, key) {
            return { id: key, name: value };
          });
        }
      }
    });
  }
]);
