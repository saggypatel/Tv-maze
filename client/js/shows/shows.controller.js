angular.module('shows.controller', [])
	.controller('ShowsController', function ($scope, show) {
		$scope.show = show;
	});