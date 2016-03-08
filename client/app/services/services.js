angular.module('potato.services', [])
// angular.module('potato')
.factory('Photos', function ($http) {
  var getPhotos = function () {
    return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
      .then(function(data){
        return(data.data.items);
      });
  };

  var selected = {};

  var setSelected = function (selection) {
    selected = selection;
  };

  var getSelected = function() {
    return selected;
  };

  return {
    getPhotos: getPhotos,
    setSelected: setSelected,
    getSelected: getSelected
  };
})

