angular.module('potato', [
  'ngRoute',
  'potato.services',
  'potato.photos'
  // 'ng',
  // 'ngResource',
  
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/photos', {
      templateUrl: 'app/photos/photos.html',
      controller: 'PhotosController'
    })
    .otherwise({
      redirectTo: '/photos'
    });
    
})