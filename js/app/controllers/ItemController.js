empeekApp.controller('itemCntrl', ['$scope', '$routeParams', 'localStorageService', 'Mediator',
  function($scope, $routeParams, $localStorageService, Mediator) {

    // Mediator.subscribe('item:update', 1, update);

    // function update (value) {
    //   $scope.item = value;
    //   SS.log(value);
    // }

    $scope.activeId = $routeParams.id;

    // (function init () {
    //   var items = $localStorageService.get('items');

    //   for (item in items) {
    //       if ($scope.activeId === items[item].id) {
    //           $scope.item = items[item];
    //       }
    //   }
    // })();

    $scope.addComment = function (event) {
      var text = event.target.value;

      event.target.value = '';
    };
}]);