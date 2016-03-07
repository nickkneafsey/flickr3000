angular.module('potato.photos', [])

.controller('PhotosController', function ($scope, Photos) {


  $scope.data = {};

  var initializePhotos = function () {
    Photos.getPhotos()
      .then(function (photos) {
        console.log(photos)
        // $scope.data.photos = photos;
      })
      .catch(function (error) {
        console.error(error);
      });
    // $scope.data.photos = [1,2,3];
  };

  initializePhotos();
});

