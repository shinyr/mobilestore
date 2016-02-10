app.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
	
	$scope.listProducts = function(){
		console.log('list of productus');
		HomeService.fetchProducts()
		.then(function(data) {
			 $scope.products = data.data;
		    	 console.log(JSON.stringify($scope.products));
		});
	};
	
	$scope.listProducts();
}]);