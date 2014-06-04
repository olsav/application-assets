angular.module('core').directive('navBar', [
  '$document',

  function ($document) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'assets/templates/core/partials/nav_bar.html',
      replace: true,

      scope: {},

      controller: [
        '$scope',
        '$state',

        function ($scope, $state) {
          $scope.$state = $state;
          $scope.collapsed = true;
        }
      ],

      link: function ($scope, $element) {
        var event = 'click.navBar.' + $scope.$id;

        $document.on(event, function () {
          $scope.$apply(function () {
            $scope.collapsed = true;
          });
        });

        $element.on(event, 'button.navbar-toggle', function (event) {
          $scope.$apply(function () {
            $scope.collapsed = !$scope.collapsed;
          });

          event.stopPropagation();
        });

        $scope.$on('$destroy', function () {
          $document.off(event);
        });
      }
    };
  }
]);
