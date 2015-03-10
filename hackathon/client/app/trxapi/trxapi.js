'use strict';

angular.module('monitoringUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/trxapi', {templateUrl:'app/trxapi/trxapi.html',
      	controller: 'TrxapiCtrl'});
  });