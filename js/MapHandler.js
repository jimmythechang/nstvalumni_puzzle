function MapHandler() {
}

MapHandler.mapInitialize = function(lat, lng) {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(lat, lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map($('#canvasContainer')[0], mapOptions);
}