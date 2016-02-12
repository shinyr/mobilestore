mobileStoreApp.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
	
	/* method to list the products and categories in home page*/
	$scope.listProducts = function(){
		HomeService.listProducts()
		.then(function(data) {
			 $scope.category = []; //category list
			 $scope.models = []; // models list
			$scope.category = data.category;
			$scope.models = data.models;
			
		});
	};
	
	$scope.listProducts();
}]);