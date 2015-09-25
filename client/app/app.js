console.log('app.js accessed')
var app = angular.module('artFiend', ['ui.router'])
// Routing
.config(function($stateProvider, $urlRouterProvider){
  // Unmatched url catch
  $urlRouterProvider.otherwise("/gallery");
  // States
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'gallery/gallery.html'
    })
    .state('otherwise', {
      url: '/gallery',
      templateUrl: 'gallery/gallery.html'
    })
});
