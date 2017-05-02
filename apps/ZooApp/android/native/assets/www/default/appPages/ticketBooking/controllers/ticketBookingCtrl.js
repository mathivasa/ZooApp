
/* JavaScript content from appPages/ticketBooking/controllers/ticketBookingCtrl.js in folder common */
app.controller('ticketBookingCtrl', function($scope, $state, $stateParams) {
	
	alert("ticket");
	 $scope.adult = 0;
	 $scope.child = 0;
	 $scope.result= 0;
	 $scope.adultAge = [{value: '1'}, {value: '2'},{value: '3'}, {value: '4'},{value: '5'}, {value: '6'}];
	    $scope.update = function(item) {
	    $scope.adult=parseInt(item.value*30);
	    $scope.result =$scope.child+$scope.adult;
	    $scope.adultTicket=item.value;
	    alert($scope.adultTicket);
	    };
	  
	    $scope.childAge = [ {value: '1'}, {value: '2'},{value: '3'}, {value: '4'},{value: '5'}, {value: '6'}];
	    $scope.update1 = function(item1) {
	    $scope.child=parseInt(item1.value*10);
	    $scope.result=$scope.child+$scope.adult;
	    $scope.childTicket=item1.value;
	   
	    };
	    $scope.sendTicket=function(){
	    	alert("send Ticket");
	    	 console.log($scope.adultTicket);
	    	$state.go('landing.ticketConform',{myTicket:{"Aticket":$scope.adultTicket,"CTicket":$scope.childTicket,"childPrice":$scope.child,"adultPrice":$scope.adult,"total":$scope.result}})
	    }
	   });