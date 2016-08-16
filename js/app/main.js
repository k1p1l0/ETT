var empeekApp = angular.module('empeekApp', ['ngRoute']);

empeekApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
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
}]);