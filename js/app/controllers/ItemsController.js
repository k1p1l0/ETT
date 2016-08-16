empeekApp.controller('itemsCntrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  	$scope.items = [
  			{
		  		id: 0,
		  		name: 'Hello',
		  		comments: {
		  			length: 5
		  		}
  			}, {
		  		id: 1,
		  		name: 'Bye!',
		  		comments: {
		  			length: 6
		  		}
  			}
  		];


  	$scope.itemRemove = function (id) {
  		SS.log(id);
  	};

  	$scope.addItem = function (value) {
  		$scope.items.push({
  			id: this.length + 1,
  			name: value,
  			comments: {
  				length: 0
  			}
  		});
  	};
}]);
