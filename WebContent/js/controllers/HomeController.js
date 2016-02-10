app.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
	
	$scope.listProducts = function(){
		console.log('list of productus');
	}
	
	$scope.listProducts();
}]);