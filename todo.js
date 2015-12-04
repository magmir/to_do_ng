(function() {
  var app = angular.module('toDo', []);

  app.directive('todoList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/todo.html',
      controller: ['$scope', function($scope) {
        $scope.todos = [{
          'title': 'Build a todo app',
          'done': false
        }, {
          'title': 'Learn AngularJS',
          'done': false
        }, {
          'title': 'Go to gym',
          'done': false
        }];
        $scope.addToDo = function () {
          $scope.todos.push({
            'title': $scope.newtodo,
            'done': false
          });
          $scope.newtodo = '';
        };
        $scope.removeToDo = function () {
          var oldList = $scope.todos;
          $scope.todos = [];
          angular.forEach(oldList, function (x) {
            if (!x.done) $scope.todos.push(x);
          });
        };
        $scope.selectTab = function(setTab) {
          $scope.tab = setTab;
        };
        $scope.isSelected = function(checkTab) {
          return $scope.tab === checkTab;
        };
      }],
      controllerAs: 'todoCtrl'
    };
  });

})();
