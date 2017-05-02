app.controller('dashboardCtrl', function($scope, $state) {
	
	$scope.slideOne = function() {
	    $state.go('landing.nearby');
	    }
	
	
	$scope.direction = function() {
	    $state.go('landing.direction');
	    }
	
	$scope.nearby = function() {
	    $state.go('landing.nearby');
	    }
	
	$scope.animals = function() {
	    $state.go('landing.animalList');
	    }
	
	$scope.gallery = function() {
	    $state.go('landing.gallery');
	    }
	
	$scope.ticketbooking = function() {
	    $state.go('landing.ticketBooking');
	    }
	
$scope.takephoto = function() {
		
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		    destinationType: Camera.DestinationType.FILE_URI,
		    saveToPhotoAlbum : true
		    });

		function onSuccess(imageURI) {
			alert(imageURI);
		    var image = document.getElementById('myImage');
		    image.src = imageURI;
		    localStorage.setItem("img", imageURI);
		    sessionStorage.setItem("img", imageURI);
		}

		function onFail(message) {
		    alert('Failed because: ' + message);
		}
		
	}
	
	
	
	
	// pure JS
	var elem = document.getElementById('mySwipe');
	window.mySwipe = Swipe(elem, {
	  startSlide: 0,
	  auto: 3000,
	  continuous: true,
	  disableScroll: true,
	  //stopPropagation: true,
	  callback: function(index, element) {},
	  transitionEnd: function(index, element) {}
	});
	

	// with jQuery
	 // window.mySwipe = $('#mySwipe').Swipe().data('Swipe');	
	
});