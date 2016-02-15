mobileStoreApp.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
	
	$scope.models = []; // models list
	
	$scope.category = []; //category list
	
	$scope.showModal = false;
	
	/* method to list the products and categories in home page*/
	$scope.listProducts = function(platform){
		if(platform == undefined)
			platform = 'android';
		$scope.platform = platform; // to use in search method
		HomeService.listProducts(platform)
		.then(function(data) {
			
			$scope.category = data.category;
			$scope.models = data.models;
			
		});
	};
	
	$scope.listProducts();
	
}]);