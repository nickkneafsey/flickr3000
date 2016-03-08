angular.module('potato.photos', [])
// angular.module('potato')
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
  // $scope.consoleSelected = function() {
  //   console.log($scope.selected);
  // }
  
  initializePhotos();
});

