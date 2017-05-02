
app.controller('loginCtrl', function($scope, $state, $http) {

	
	 $scope.login=function(data){
		  var username = data.user;
		  var password = data.password;
		  //alert(username);
		  //alert(password);
		  
		//  $state.go('landing.homePage');
		  var params = {
		       username: username,
		       password: password
		  }
		  var invocationData = {
		       adapter : 'httpAdapter',
		       procedure : 'login',
		       parameters : [params]
		  
		   };
		  //alert(JSON.stringify(invocationData.parameters));
		  
		  var options = {
		       onSuccess : success,
		       onFailure : failure,
		       
		   };
		  WL.Client.invokeProcedure(invocationData, options);
		  function success(res){
		   //alert(JSON.stringify(res));
		   var validation = res.responseJSON.info;
		   if(validation == "valid user"){
		    $state.go('landing.dashboard');
		   }else{
		    alert("Enter Correct Values");
		   }
		  }
		  function failure(err){
		   alert(JSON.stringify(err));
		  }
		  
		 }
	
	
	//It will navigate to Signup page.


        $scope.signup = function() {

        //It will reset the fields in Signup page.

        $( '#sign_up' ).each(function(){
        this.reset();
        });


        //It will navigate to Signup page.

            $state.go('landing.signup');
        }

        //It will navigate to Forgetpassword page.

        $scope.forgetpw = function() {


            $state.go('landing.forget_pw');
        }

        //It will navigate to Dashboard page.



    })




