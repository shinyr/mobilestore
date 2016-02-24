/* HomeController initiates method to get the list of models and categories to be listed in the home page */
mobileStoreApp.controller('HomeController', ['$scope', 'HomeService', '$location', function($scope, HomeService, $location){
	
	$scope.platform = [
	                   'Android',
	                   'Windows',
	                   'Ios'
	                 ];
	
	$scope.selected = {
			 platform : []
	 };
	
	$scope.brands = [
	                 'AllBrands',
	                 'Apple', 
	                 'Samsung', 
	                 'Micromax', 
	                 'Motorola',
	                 'Sony',
	                 'HTC',
	                 'Asus',
	                 'Lenovo',
	                 'LG',
	                 'Nokia',
	                 'Microsoft'
	               ];
	
	 $scope.selected = {
			 brands : []
	 };
	 
	$scope.screenSize = [
	                     'Up to 4.0',
	                     '4.0 - 5.0',
	                     '5.0 - 6.0',
	                     'Above 6.0'
	                   ];
	
	 $scope.selected = {
			 screenSize : []
	 };
	 
	 $scope.processor = [
	                     'Dual Core',
	                     'Quad Core',
	                     'Octa Core',
	                     'Triple Core0'
                      ];

	 $scope.selected = {
			 processor : []
	 };
	 
	 $scope.camera = [
	                  'Up to 3.0',
	                  '3.0 - 5.0',
	                  '5.0 - 8.0',
	                  'Above 8.0'
	                ];

	 $scope.selected = {
			 camera : []
	 };
	
	 $scope.network = [
	                   '2G',
	                   '3G',
	                   '4G'
	                 ];
	 
	 $scope.selected = {
			 network : []
	 };
	
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
	
	$scope.listProducts();
}]);