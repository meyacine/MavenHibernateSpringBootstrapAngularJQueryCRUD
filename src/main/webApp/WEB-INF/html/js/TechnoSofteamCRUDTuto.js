/**
 * Angular App for the employe module
 */
(function(){
	var app = angular.module('tuto', ['ngRoute', 'employeController', 'employeDirectives']);
	// Definition du routage URL -> PAGE
	app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/newEmploye', {
        templateUrl: './new-employe.html',
        controller: 'NewEmployeCtrl'
      }).
      when('/editEmploye', {
        templateUrl: './edit-employe.html',
        controller: 'EditEmployeCtrl'
      }).
      when('/deleteEmploye', {
        templateUrl: './delete-employe.html',
        controller: 'DeleteEmployeCtrl'
      }).
      otherwise({
        redirectTo: '#'
      });
	}]);
})();