empeekApp.controller('itemsCntrl', ['$scope', '$routeParams', 'localStorageService', 'Mediator',
  function($scope, $routeParams, $localStorageService, Mediator) {

  	init();

  	function init () {
  		var items = [],
  			itemsKey;

  		itemsKey = $localStorageService.keys();

  		for (let key in itemsKey) {
  			items.push(getItem(itemsKey[key]));
  		}

  		$scope.items = items;
  	}

  	$scope.itemRemove = function (id) {
  		removeItem(id);

  		init();
  	};

  	$scope.addItem = function (value) {
  		var item = 
  		{
  			id: SS.createId(7),
			name: value,
			comments: []
		};

  		setItem(item.id, item);

  		$scope.items.push(item);
  	};

  	function setItem (key, val) {
   		return $localStorageService.set(key, val);
  	}

  	function getItem(key) {
   		return $localStorageService.get(key);
  	}

  	function removeItem(key) {
   		return $localStorageService.remove(key);
  	}
}]);
