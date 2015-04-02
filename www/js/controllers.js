angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('servicoCtrl', function($scope, $http) {

  $scope.doRefresh = function () {
    $http.get('https://apricot-surprise-2279.herokuapp.com/api/products',
      {cache: true})
    .then(function(response) {
      $scope.servicos = {};
      $scope.servicos = response.data;
      console.log(response.data);
      $scope.$broadcast('scroll.refreshComplete');
    })
  };

  $scope.doRefresh();
  
});