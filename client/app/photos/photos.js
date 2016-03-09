angular.module('potato.photos', [])
.controller('PhotosController', function ($scope, $location, Photos) {

  $scope.data = {};

  var initializePhotos = function () {
    Photos.getPhotos()
      .then(function (photos) {
        $scope.data.photos = photos;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.changeSelection = function (selection) {
    Photos.setSelected(selection);
    $location.path('photo');
  }
  
  initializePhotos();
});

