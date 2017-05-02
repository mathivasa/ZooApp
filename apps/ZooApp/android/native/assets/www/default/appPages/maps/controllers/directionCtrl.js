
/* JavaScript content from appPages/maps/controllers/directionCtrl.js in folder common */
app.controller('directionCtrl',function($scope,$state,$http){
	
	function successCallback(position){
	 function myMap() {
	    var map;
	  var mapProp= {
	      center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
	      zoom:15,
	  };
	   map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	   var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);



	  var marker = new google.maps.Marker({
	          map: map,
	          position: latlng
	      });
	  var Infowindow = new google.maps.InfoWindow();
	      google.maps.event.addListener(marker, 'click', function () {

	          Infowindow.setContent("Al-Amin ZOO");
	          Infowindow.open(map, this);

	      });
	  }

	  google.maps.event.addDomListener(window, 'load', myMap());
	}
	function errorCallback(){
	 alert("error");
	}
	
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	
	



	
	/*function myMap() {
	    var map= {
	        center:new google.maps.LatLng(11.0168,76.9558),
	        zoom:10,
	    };
	    var map=new google.maps.Map(document.getElementById("googleMap"),map);
	    }
	   
	  google.maps.event.addDomListener(window, 'load', myMap());*/
  
});