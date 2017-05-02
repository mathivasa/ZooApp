
/* JavaScript content from appPages/animal_Details/controllers/animalDetailsCtrl.js in folder common */

app.controller('animalDetailsCtrl', function($scope, $state, $http,$rootScope,$stateParams, productService) {

	$scope.value=$stateParams.name;
	alert($stateParams.name);
	
	$scope.animalDetails = productService.name($stateParams.name);
	alert(JSON.stringify($scope.animalDetails));
	console.log($scope.animalDetails);
	
				
		})