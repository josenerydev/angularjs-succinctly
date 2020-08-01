var app = angular.module('MyApp', ['ngResource']);

app.factory('Post', function ($resource) {
  // return $resource('/api/posts/:id');
  return $resource(
    '/api/posts/:id',
    {},
    {
      query: { method: 'GET', isArray: false },
    },
  );
});

app.controller('PostIndexCtrl', function ($scope, Post) {
  Post.query(function (data) {
    $scope.posts = data;
  });
});

app.controller('PostShowCtrl', function ($scope, Post) {
  Post.get({ id: 1 }, function (data) {
    $scope.post = data;
  });
});

var first = $http.get('/app/data/first.json'),
  second = $http.get('/app/data/second.json'),
  third = $http.get('/app/data/third.json');

$q.all([first, second, third])
  .then(function (result) {
    var tmp = [];
    angular.forEach(result, function (response) {
      tmp.push(response.data);
    });
    return tmp;
  })
  .then(function (tmpResult) {
    $scope.combinedResult = tmpResult.join(', ');
  });
