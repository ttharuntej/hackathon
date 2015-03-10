'use strict';

angular.module('monitoringUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/alerts', {templateUrl:'app/alerts/alerts.html',
      	controller: 'AlertsCtrl'});
  });