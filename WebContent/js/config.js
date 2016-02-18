mobileStoreApp.config(['$routeProvider',
	                   function($routeProvider){
	 	  $routeProvider.when('/login',{
	 		      templateUrl: './views/login.html',
	 			  controller:'LoginController'
	 	  }).when('/home', {
	 		 templateUrl: './views/home.html',
			  controller:'HomeController'
	 	  }).when('/filter', {
		 		 templateUrl: './views/filter.html',
				  controller:'FilterController'
		 	  }).otherwise({
	 	        redirectTo: '/home'
	      });
	  }
]);