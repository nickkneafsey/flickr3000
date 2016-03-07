angular.module('potato', [
  'potato.services',
  'potato.photos',
  'ngRoute'
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