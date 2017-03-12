"use strict";

var HandUp = angular.module('HandUp', ['ui.router']);

HandUp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
$stateProvider
	 	.state('home', {
	 		url: '/',
			views: {
				'main': { templateUrl: 'partials/main.html',
									controller: 'MainNavController'}
			}
		})
 		.state('services', {
	 		url: '/services',
	 		views: { 
	 			'main': { templateUrl: 'partials/services.html',
	 								controller: 'ServiceCategoriesController'}
	 		}
 		});
 	$urlRouterProvider.otherwise('/');
}]);


