
/* JavaScript content from appPages/listItems/controllers/listItemsCtrl.js in folder common */
app.controller('listItemsCtrl', function($scope, $state, $http,$rootScope,$stateParams, productService) {
 
 
 

 $scope.value=$stateParams.val;
 alert($stateParams.val);
 
 $scope.listItems = productService.category($stateParams.val);
 alert(JSON.stringify($scope.category));
 $scope.animalDetails = function(index) {
  
  alert("===>>>"+index);
    
    
    //$scope.name = productService.sample('022');
   }
  })