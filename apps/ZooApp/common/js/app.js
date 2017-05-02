// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app=angular.module('starter', ['ionic', 'starter.services'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        
        $stateProvider

  // setup an abstract state for the tabs directive
    .state('landing', {
    url: '/landing',
    abstract: true,
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })

  // Each tab has its own nav history stack: .state('landing.login', {  
  
  .state('landing.login', {
	    url: '/login',
	    views: {
	      'landing': {
	        templateUrl: 'appPages/registration/templates/login.html',
	        controller: 'loginCtrl'
	      }
	    }
	  })
	  
  .state('landing.signup', {
    url: '/signup',
    views: {
      'landing': {
        templateUrl: 'appPages/registration/templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })
  
  .state('landing.animalList', {
            url: '/animalList',
            views: {
              'landing': {
                templateUrl: 'appPages/animalList/templates/animalList.html',
                controller: 'animalListCtrl'
              }
            }
          })
          
    .state('landing.listItems', {
            url: '/listItems/:val',
            views: {
              'landing': {
                templateUrl: 'appPages/listItems/templates/listItems.html',
                controller: 'listItemsCtrl'
              }
            }
          })
          
     .state('landing.animalDetails', {
            url: '/animalDetails/:name',
            views: {
              'landing': {
                templateUrl: 'appPages/animal_Details/templates/animalDetails.html',
                controller: 'animalDetailsCtrl'
              }
            }
          })
          
    
  
  .state('landing.dashboard', {
	    url: '/dashboard',
	    views: {
	      'landing': {
	        templateUrl: 'appPages/dashboard/templates/dashboard.html',
	        controller: 'dashboardCtrl'
	      }
	    }
	  })
	  
	 .state('landing.gallery', {
	    url: '/gallery',
	    views: {
	      'landing': {
	        templateUrl: 'appPages/gallery/templates/gallery.html',
	        controller: 'galleryCtrl'
	      }
	    }
	  })
	  
	.state('landing.direction', {
		    url: '/direction',
		    views: {
		      'landing': {
		        templateUrl: 'appPages/maps/templates/direction.html',
		        controller: 'directionCtrl'
		      }
		    }
		  })
	  
    .state('landing.nearby', {
		    url: '/nearby',
		    views: {
		      'landing': {
		        templateUrl: 'appPages/maps/templates/nearby.html',
		        controller: 'nearbyCtrl'
		      }
		    }
		  })
		  
        .state('landing.feedBack', {
		    url: '/feedBack',
		    views: {
		      'landing': {
		        templateUrl: 'appPages/feedBack/templates/feedBack.html',
		        controller: 'feedBackCtrl'
		      }
		    }
		  })
		  
		  .state('landing.galleryImage', {
            url: '/galleryImage',
            params:{myparams:null},
            views: {
              'landing': {
                templateUrl: 'appPages/galleryImage/templates/galleryImage.html',
                controller: 'galleryImageCtrl'
              }
            }
          })
		  
		  
		   .state('landing.ticketBooking', {
		    url: '/ticketBooking',
		    views: {
		      'landing': {
		        templateUrl: 'appPages/ticketBooking/templates/ticketBooking.html',
		        controller: 'ticketBookingCtrl'
		      }
		    }
		  })
		  
		   .state('landing.photoBooth', {
		    url: '/photoBooth',
		    views: {
		      'landing': {
		        templateUrl: 'appPages/photoBooth/templates/photoBooth.html',
		        controller: 'photoBoothCtrl'
		      }
		    }
		  })
		  
		  .state('landing.aboutUs', {
		    url: '/aboutUs',
		    views: {
		      'landing': {
		        templateUrl: 'appPages/aboutUs/templates/aboutUs.html',
		        controller: 'aboutUsCtrl'
		      }
		    }
		  })
		  
		   .state('landing.ticketConform', {
		    url: '/ticketConform',
		    params:{myTicket:null},
		    views: {
		      'landing': {
		        templateUrl: 'appPages/ticketConform/templates/ticketConform.html',
		        controller: 'ticketConformCtrl'
		      }
		    }
		  });
		  
  
        
   


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing/login');

});