function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(-37.955856,176.957474),
    zoom:8,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
<!---->
  var myCenter=new google.maps.LatLng(-37.638654,176.183627);
  var marker=new google.maps.Marker({
  	position:myCenter,
  	});
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
  content:"Mount Maunganui"
  });
  infowindow.open(map,marker);
<!---->
  var myCenter1=new google.maps.LatLng(-38.355873,176.367498);
  var marker1=new google.maps.Marker({
  	position:myCenter1,
  	});
  marker1.setMap(map);

  var infowindow1 = new google.maps.InfoWindow({
  content:"Waiotapu"
  });
  infowindow1.open(map,marker1);
<!---->
  var myCenter2=new google.maps.LatLng(-38.078054,176.266646);
  var marker2=new google.maps.Marker({
  	position:myCenter2,
  	});
  marker2.setMap(map);

  var infowindow2 = new google.maps.InfoWindow({
  content:"Lake Roturua"
  });
  infowindow2.open(map,marker2);

  <!---->
  var myCenter3=new google.maps.LatLng(-38.226667,176.506667);
  var marker3=new google.maps.Marker({
  	position:myCenter3,
  	});
  marker3.setMap(map);

  var infowindow3 = new google.maps.InfoWindow({
  content:"Mount Tarawera"
  });
  infowindow3.open(map,marker3);

}
google.maps.event.addDomListener(window, 'load', initialize);
