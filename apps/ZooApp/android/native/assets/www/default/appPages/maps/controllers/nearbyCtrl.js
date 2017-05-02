
/* JavaScript content from appPages/maps/controllers/nearbyCtrl.js in folder common */
app.controller('nearbyCtrl', function($scope, $state) {
	
	$scope.food = function() {
	    $state.go('landing.direction');
	    }
	
	$scope.cafe = function() {
	    $state.go('landing.direction');
	    }
	
	$scope.parking = function() {
	    $state.go('landing.direction');
	    }
	
	$scope.restroom = function() {
	    $state.go('landing.direction');
	    }
	
	$scope.information = function() {
	    $state.go('landing.direction');
	    }
	
});