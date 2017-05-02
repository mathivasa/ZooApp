
// moves to login page on clicking Existing user link
var app=angular.module('starter')
app.controller('signupCtrl', function($scope, $state, $http) {
	
	
	
	$scope.Reg = function(data) {
		
		var userName= data.firstname;
		var eMail= data.email;
		var mobileNumber= data.mobilenumber;
		var passWord = data.password;
		
		//alert(userName);
		//alert(eMail);
		//alert(mobileNumber);
		//alert(passWord);
		
		//$state.go('landing.dashboard');
		
		var param ={
				name: userName,
		        email: eMail,
		        mobile: mobileNumber,
		        password: passWord
		
		};
		
		var invocationData = {
			    adapter : 'signUpAdapter',
			    procedure : 'signUp',
			    parameters : [param]
			};
		
		var options = {
			    onSuccess : success,
			    onFailure : failure
			};
		
		WL.Client.invokeProcedure(invocationData, options);
		
		function success(res){
			alert(JSON.stringify(res));
		 var validation=res.responseJSON.info;
          alert(validation);
	      if(validation=="Account Created Successfully")
	       {
	       alert('Account Created Successfully');
	       $state.go('landing.login');
	       }
	      else if(validation=="Already you used this mail id")
	       {
	       alert("Already you used this mail id");
	       }
	      else if(validation=="Already you used this number")
	       {
	       alert("Already you used this mobile number");
	       }
	      else
	       {
	       alert("error");
	       }
	     } 
	     function failure(err){
	      alert(JSON.stringify(err));
	     }
	
		
	}	
	     

$scope.already = function() {
            $state.go('landing.login');

        }

  });