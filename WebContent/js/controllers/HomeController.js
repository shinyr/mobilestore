/* HomeController initiates method to get the list of models and categories to be listed in the home page */
mobileStoreApp.controller('HomeController', ['$scope', 'sharedData', 'HomeService', '$location', function($scope, sharedData, HomeService, $location){
	
	/* array of platform */
	$scope.platform = [
	                   'Android',
	                   'Windows',
	                   'Ios'
	                 ];
	
	/* method to list the products and categories in home page*/
	$scope.listProducts = function(platform, category){
		if(platform == undefined)
			platform = 'Android';
		$scope.mainCategory = platform;
		HomeService.listProducts(platform, category)
		.then(function(data) {
			 $scope.category = []; //category list
			 $scope.models = []; // models list
			 $scope.category = data.category;
			 $scope.models = data.models;
			
		});
	};

	$scope.details = function(data){
		 var next = sharedData;
		 next.set(data);
		$location.path('/details');
	};
	
	$scope.listProducts();
}]);