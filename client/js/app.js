angular.module('app', ['ngRoute', 'ngResource', 
  'search.controller', 'search.service',
  'shows.controller', 'shows.service'])
  .filter('trustHTML', function($sce) {
    return function(text){
      return $sce.trustAsHtml(text);
    };
  })
  .config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        .when('/shows/:id', {
          templateUrl: 'views/shows.html',
          controller:'ShowsController',
          resolve: {
            show: function($route, ShowsService){
              return ShowsService.get({ id: $route.current.params.id})
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }]);
