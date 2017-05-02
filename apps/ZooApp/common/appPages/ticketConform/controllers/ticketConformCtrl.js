app.controller('ticketConformCtrl', function($scope, $state, $stateParams, $rootScope) {
	
	alert("ticket");
	$scope.adultTicket=$stateParams.myTicket.Aticket;
	alert($scope.childTicket);
	$scope.childTicket=$stateParams.myTicket.CTicket;
	$scope.childPrice=$stateParams.myTicket.childPrice;
	$scope.adultPrice=$stateParams.myTicket.adultPrice;
	$scope.total=$stateParams.myTicket.total;
	$scope.IsVisible = false;
	$scope.conform=function(){
		
       
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;
        
		 var ticketCollection = WL.JSONStore.get(collectionName);
		    alert("Sucess"+collectionName);
		    
		    var options = {};
		    var data = {adultTickets: $scope.adultTicket, childTickets: $scope.childTicket, totalAmount: $scope.total};

		    ticketCollection.add(data, options).then(function () {
		     console.log("Data Added Sucessfully"+JSON.stringify(data));
		     
		    }).fail(function (error) {
		     alert("Failure in Adding Data to Store");
		    });
		
		   
		   
		   ticketCollection.findAll().then(
		            function(res) {
		             
		            
		              $scope.adticket = JSON.stringify(res[res.length-1].json.adultTickets);
		              $scope.chiticket = JSON.stringify(res[res.length-1].json.childTickets);
		              $scope.tamount = JSON.stringify(res[res.length-1].json.totalAmount);

		            }); 
		  }
		  $scope.conform();
		  $rootScope.$on('$stateChangeSuccess', 
		    function(event, toState, toParams, fromState, fromParams){
		   $scope.conform();
		  
		    });
		  
		  $scope.clear = function(){
		   WL.JSONStore.init(collections).then(function (collections) {
		   WL.JSONStore.destroy().then(function () {
		      alert("Destroy Store Sucessfully");
		    }).fail(function (error) {
		      alert(error);
		    });
		   });
	}
	   });