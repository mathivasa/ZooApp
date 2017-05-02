app.controller("galleryCtrl", function($scope, $stateParams, $state) {
 
	 $scope.images= [{id: 0, src: "images/gallery/whitelion.jpg"},
      	           	{id: 1, src: "images/gallery/tiger.jpg"},
       	           {id: 2, src: "images/gallery/deer.jpg"},
     	           	{id: 3, src: "images/gallery/elephant.jpg"},
     	         {id: 4, src: "images/gallery/cheetah.jpg"}];
 
    $scope.loadImages = function() {
        for(var i = 0; i < images.length; i++) {
            $scope.images.push(images[i]);
        }
    }

$scope.selectImage=function(index){
	alert("selected");
	$state.go('landing.galleryImage',{myparams:{"name":$scope.images[index].src}})
}
 
});