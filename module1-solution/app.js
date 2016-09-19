(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.name = "";
		$scope.totalLunchItems = 0;
		$scope.message = "";

		$scope.displayNumeric = function () {
			var countLunchItems = calculateLunchItems($scope.name);
			$scope.totalLunchItems = countLunchItems;
		}

		$scope.displayMessage = function () {
			$scope.message = displayMessages($scope.totalLunchItems);
		}

		function calculateLunchItems(string) {
			var totalItems = 0;
			var itemsArray = string.split(',');
			for (var i = 0; i < itemsArray.length; i++) {
				totalItems += 1;
			}
			return totalItems;
		}

		function displayMessages(number) {
			var message = "";
			if (number == 0) {
				message = "Please enter data first";

			} else if (number <= 3) {
				message = "Enjoy!";
			} else {
				message = "Too much!";
			} 

			return message;
		}

	});
})();
