
/* JavaScript content from appPages/galleryImage/controllers/galleryImageCtrl.js in folder common */
app.controller("galleryImageCtrl", function($scope,$stateParams) {
	console.log($stateParams);
 
    $scope.getImage=$stateParams.myparams.name;
 
});