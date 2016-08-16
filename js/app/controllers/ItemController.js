empeekApp.controller('itemCntrl', ['$scope', '$routeParams', 
  function($scope, $routeParams) {
  	$scope.activeId = $routeParams.id;

   	$scope.item = {
   		id: $routeParams.id,
   		comments: [{
   		   			text: SS.createId(7)
   		   		},
   		   		{
   		   			text: SS.createId(7)
   		   		},
   		   		{
   		   			text: SS.createId(7)
   		   		}]
   	};

    $scope.blurCallback = function (event) {
      SS.log(event.target.value);

      event.target.value = '';
    };
}]);