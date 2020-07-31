var app = angular.module('MyApp', []);

app.factory('UserService', function () {
  var users = ['Peter', 'Daniel', 'Nine'];

  return {
    all: function () {
      return users;
    },
    first: function () {
      return users[0];
    },
  };
});

app.controller('MyCtrl', function ($scope, UserService) {
  $scope.users = UserService.all();
});

// app.controller('AnotherCtrl', function ($scope, UserService) {
//   $scope.firstUser = UserService.first();
// });

// app.controller('AnotherCtrl', [
//   '$scope',
//   'UserService',
//   function ($scope, UserService) {
//     $scope.firstUser = UserService.first();
//   },
// ]);

var anotherCtrl = function ($scope, UserService) {
  $scope.firstUser = UserService.first();
};

anotherCtrl.$inject = ['$scope', 'UserService'];

app.controller('AnotherCtrl', anotherCtrl);
