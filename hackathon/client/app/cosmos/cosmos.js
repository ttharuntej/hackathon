'use strict';

angular.module('monitoringUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cosmos', {templateUrl:'app/cosmos/cosmos.html',
      	controller: 'CosmosCtrl'});
  });