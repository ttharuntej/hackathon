'use strict';

angular.module('monitoringUiApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'COMS',
      'link': '/coms'
    },
    {
      'title': 'COSMOS',
      'link': '/cosmos'
    },
    {
      'title': 'Transaction API',
      'link': '/trxapi'
    },
    {
      'title': 'Alerts',
      'link': '/alerts'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });