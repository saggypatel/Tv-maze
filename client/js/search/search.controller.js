angular.module('search.controller', [])
	.directive('showsPreview', function() {
		return {
			restrict: 'EA',
			scope: {
				show: '='
			},
			templateUrl: '../views/shows.preview.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService) {

		$scope.search = function () {
			SearchService.query({
				name: $scope.name
				
			}, function (response) {
				$scope.show = response;
			});	
		};

});