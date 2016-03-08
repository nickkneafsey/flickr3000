angular.module('potato.singlePhoto', [])

.controller('PhotoController', function ($scope, $location, Photos) {

  var getSelected = function () {
    $scope.selected = Photos.getSelected();
    console.log("SELECTED", $scope.selected)
  }

  getSelected();
});