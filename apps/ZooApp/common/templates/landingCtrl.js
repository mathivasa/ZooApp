app.controller('landingCtrl', function($scope, $state) {
	
	


	$scope.animals = function() {
	    $state.go('landing.animalList');
	    }
	
	$scope.gallery = function() {
	    $state.go('landing.gallery');
	    }
	
	$scope.direction = function() {
	    $state.go('landing.direction');
	    }
	
	$scope.nearby = function() {
	    $state.go('landing.nearby');
	    }
	
	$scope.ticketbooking = function() {
	    $state.go('landing.ticketBooking');
	    }
	
	$scope.feedback = function() {
	    $state.go('landing.feedBack');
	    }
	
	$scope.aboutus = function() {
	    $state.go('landing.aboutUs');
	    }
	
	$scope.nextdash = function() {
	    $state.go('landing.dashboard');
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
	
	

});