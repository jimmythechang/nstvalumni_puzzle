function MapHandler() {
}

MapHandler.mapInitialize = function(lat, lng, content) {
  var latLng = new google.maps.LatLng(lat, lng);

  var mapOptions = {
    zoom: 14,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map($('#canvasContainer')[0], mapOptions);

  var infoWindow = new google.maps.InfoWindow({
     content: content
  });

  var marker = new google.maps.Marker({
     position: latLng,
     map: map,
     animation: google.maps.Animation.DROP
  });

  infoWindow.open(map, marker);
}