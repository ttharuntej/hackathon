'use strict';
var NewAlertCtrl = function ($scope, $modalInstance,$rootScope,alert,$http) {
  $scope.alert=alert;
  $scope.save = function () {
    $modalInstance.close($scope.alert);
  };
  $http.get('/api/events/distinctmodules').then(function(response){
    $scope.availablemodules=response.data;
  });
  $http.get('/api/events/distinctusecases').then(function(response){
    $scope.availableusecases=response.data;
  });
  $http.get('/api/events/distinctdimension1').then(function(response){
    $scope.availabledimension1=response.data;
  });
  $http.get('/api/events/distinctdimension2').then(function(response){
    $scope.availabledimension2=response.data;
  });
  $http.get('/api/events/distinctdimension3').then(function(response){
    $scope.availabledimension3=response.data;
  });

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
  $scope.open = function($event,comp) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[comp] = true;
  };
  $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
};

angular.module('monitoringUiApp')
  .controller('AlertsCtrl', function ($scope, $http,$modal) {
    $scope.loadData=function() {
      $http.get('/api/alertdef').success(function(alerts) {
        $scope.alertdefs = alerts;
      });
    }
    $scope.loadData();
    $scope.openNewAlertModal=function() {
     var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller:NewAlertCtrl,
        resolve: {
          alert: function() {
            return {};
          }
        }
        });
     modalInstance.result.then(function(newalert){
      $http({
        method: 'POST',
        url: '/api/alertdef',
        headers: {'Content-Type': 'application/json'},
        data: newalert
      }).success(function(data) {
        $scope.loadData();
      }).error(function(data){
      });
     });
    };
  $scope.editAlert=function(alert) {
    var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller:NewAlertCtrl,
        resolve: {
          alert: function() {
            return alert;
          }
        }
        });
     modalInstance.result.then(function(newalert){
      $http({
        method: 'PUT',
        url: '/api/alertdef/'+newalert._id,
        headers: {'Content-Type': 'application/json'},
        data: newalert
      }).success(function(data) {
        $scope.loadData();
      }).error(function(data){
      });
     });
  }
  $scope.deleteAlert=function(id) {
    $http({
        method: 'DELETE',
        url: '/api/alertdef/'+id,
        headers: {'Content-Type': 'application/json'}
      }).success(function(data) {
        $scope.loadData();
      }).error(function(data){
      });
     };
});
