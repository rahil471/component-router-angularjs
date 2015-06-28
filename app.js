angular.module('myApp', ['ngNewRouter','myApp.home','myApp.details'])
	.controller('AppController', ['$router', function AppController ($router) {
		$router.config([
			 {
				 path: '/', component: {
					home : 'home',
					details : 'details'
				 } 
			 }
		])
	}]);
