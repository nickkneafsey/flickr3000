angular.module('potato.services', [])

.factory('Photos', function ($http) {
  //delete $http.defaults.headers.common['X-Requested-With'];
  var getPhotos = function () {
    
    return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
      .then(function(data){
        return(data.data.items);
      });
  };

  return {
    getPhotos: getPhotos
  };
})

