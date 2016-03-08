angular.module('potato', [
  'potato.services',
  'potato.photos',
  'potato.singlePhoto',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/photos', {
      templateUrl: 'app/photos/photos.html',
      controller: 'PhotosController'
    })
    .when('/photo', {
      templateUrl: 'app/singlePhoto/singlePhoto.html',
      controller: 'PhotoController'
    })
    .otherwise({
      redirectTo: '/photos'
    });
    
});