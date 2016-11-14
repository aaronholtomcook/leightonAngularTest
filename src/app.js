var app = angular.module("app", []);
app.controller("appCtrl", function ($scope, $http) {
  $scope.greeting = 'Welcome!';
  $scope.searchTerms = '';
  $scope.search = function () {
    $http({
      method: 'GET',
      params: {key: '1948951-cb3b5d47fae481ff1194e60e2', q: $scope.searchTerms, image_type: 'photo'},
      url: 'https://pixabay.com/api/'
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });
  };
});