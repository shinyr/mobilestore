mobileStoreApp.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
	
	/* method to list the products and categories in home page*/
	$scope.listProducts = function(platform){
		if(platform == undefined)
			platform = 'android';
		HomeService.listProducts(platform)
		.then(function(data) {
			 $scope.category = []; //category list
			 $scope.models = []; // models list
			$scope.category = data.category;
			$scope.models = data.models;
			
		});
	};
	
	/*method to search products by its name*/
	$scope.search_term = function(searchTerm){
		alert(searchTerm);
	};
	
	$scope.listProducts();
}]);