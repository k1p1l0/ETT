empeekApp.controller('itemCntrl', ['$scope', '$routeParams', 'localStorageService',
  function($scope, $routeParams, $localStorageService) {

    $scope.activeId = $routeParams.id;

    (function init () {
        $scope.item = $localStorageService.get($scope.activeId);
    })();

    $scope.addComment = function (event) {
      var inputText = event.target.value;

      $scope.item.comments.push({text: inputText});

      $localStorageService.set($scope.activeId, $scope.item);

      event.target.value = '';
    };
}]);