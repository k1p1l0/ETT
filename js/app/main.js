var empeekApp = angular.module('empeekApp', ['ngRoute', 'LocalStorageModule']);

empeekApp.config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider', function($routeProvider, $locationProvider, $localStorageServiceProvider) {
  $routeProvider
    .when('/', {
			templateUrl: 'template/home.html',
			controller: 'itemsCntrl'
		})
    .when('/items/:id', {
      templateUrl: 'template/item.html',
      controller: 'itemCntrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $localStorageServiceProvider
      .setPrefix('ett')
      .setNotify(true, true);
}]);