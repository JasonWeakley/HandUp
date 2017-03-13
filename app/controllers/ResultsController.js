"use strict";

HandUp.controller('ResultsController', [
	$scope,
	$location,

	function($scope, $location) {
		console.log("ResultsController is working.");

		$scope.categories = [];
		console.log("Results will appear before this.");
	}
]);