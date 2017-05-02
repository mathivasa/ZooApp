app.controller("galleryImageCtrl", function($scope,$stateParams) {
	console.log($stateParams);
 
    $scope.getImage=$stateParams.myparams.name;
 
});