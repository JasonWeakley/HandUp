"use strict";

HandUp.controller('MainNavController',

	function ($scope, $location) {

		// Launch the view
		$scope.createView = function () {
			$location.path("/services")
		};
	}
);