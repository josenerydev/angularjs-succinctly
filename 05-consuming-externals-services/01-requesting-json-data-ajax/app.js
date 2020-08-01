var app = angular.module('MyApp', []);

app.controller('PostsCtrl', function ($scope, $http) {
  $http
    .get('data/posts.json')
    .success(function (data, status, headers, config) {
      $scope.posts = data;
    })
    .error(function (data, status, header, config) {
      console.log('data => ', data);
      console.log('status => ', status);
      console.log('header => ', header);
      console.log('config => ', config);
    });
});
