
/* JavaScript content from appPages/animalList/controllers/animalListCtrl.js in folder common */
app.controller('animalListCtrl', function($scope, $state, $http) {
	
	$scope.animallistItem = [ {
		"name" : "Wild animals","id":"001", src:"images/animalList/animals.png", "title":"wildanimals"
	}, {
		"name" : "Birds","id":"002", src:"images/animalList/birds.png", "title":"birds"
	}, {
		"name" : "Reptiles","id":"003", src:"images/animalList/reptiles.png", "title":"reptiles"
	}, {
		"name" : "Aquatic","id":"004", src:"images/animalList/aquatic.png", "title":"Aquatic"
	} ]

	$scope.animalList = function(index) {
//alert($scope.animallistItem[index].src);
		$scope.value=$scope.animallistItem[index].title;
		// alert($rootScope.flag);
		//$state.go('landing.listItems');
		alert($scope.value+"animalList");
	}

})
  



