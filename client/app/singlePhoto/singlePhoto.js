angular.module('potato.singlePhoto', [])

.controller('PhotoController', function ($scope, $location, Photos) {
  $scope.selected ={};
  $scope.tags = [];
  var getSelected = function () {
    $scope.selected = Photos.getSelected();
    var selectedString = JSON.stringify($scope.selected);
    if (selectedString !== "{}") {
      localStorage.setItem("select", selectedString);
    } else {
      $scope.selected = JSON.parse(localStorage.getItem("select"));
      var selectedString = JSON.stringify($scope.selected);
      localStorage.setItem("select", selectedString);
    }
    $scope.tags = $scope.selected.tags.split(' ');
  }

  getSelected();
});