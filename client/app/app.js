var app = angular.module('app', ['ui.router'])
// Routing
.config(function($stateProvider, $urlRouterProvider){
  // Unmatched url catch
  $urlRouterProvider.otherwise("/gallery");
  // States
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      templateUrl: './gallery/gallery.html'
    });
});
