mobileStoreApp.controller('FilterController', ['$scope', function($scope){
	
	/* array of platform */
	$scope.platform = [
	                   'Android',
	                   'Windows',
	                   'Ios'
	                 ];
	/* checked brands */
	 $scope.selected = {
			 platform : []
	 };
	
	/* array of brands */ 
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
	
	 /* checked brands */
	 $scope.selected = {
			 brands : []
	 };
	 
	/* array of screen size */
	$scope.screenSize = [
	                     'Up to 4.0',
	                     '4.0 - 5.0',
	                     '5.0 - 6.0',
	                     'Above 6.0'
	                   ];
	
	 /* checked screen size */
	 $scope.selected = {
			 screenSize : []
	 };
	 
	 /* array of processor*/
	 $scope.processor = [
	                     'Dual Core',
	                     'Quad Core',
	                     'Octa Core',
	                     'Triple Core0'
                       ];

	 /* checked processors */
	 $scope.selected = {
			 processor : []
	 };
	 
	 /* array of camera */
	 $scope.camera = [
	                  'Up to 3.0',
	                  '3.0 - 5.0',
	                  '5.0 - 8.0',
	                  'Above 8.0'
	                ];

	 /* checked camera */
	 $scope.selected = {
			 camera : []
	 };
	
	 /* array of network */
	 $scope.network = [
	                   '2G',
	                   '3G',
	                   '4G'
	                 ];
	 
	 /* selected network */
	 $scope.selected = {
			 network : []
	 };
	 
    $scope.apply = function(){
    	
    };
    
}]);
