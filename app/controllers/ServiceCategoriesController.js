"use strict";

HandUp.controller('ServiceCategoriesController', [
	$scope,
	$location,

	function($scope, $location) {
		console.log("ServiceCategoriesController is working.");

		$scope.categories = [];
		console.log("Categories will appear before this.");
	}
]);