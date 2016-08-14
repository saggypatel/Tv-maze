angular.module('shows.service', [])
	.factory('ShowsService', function ($resource) {
		return $resource('/api/shows/:id');
	});