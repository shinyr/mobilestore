mobileStoreApp.controller('DetailsController', ['$scope', 'sharedData', function($scope, sharedData){
	
	 var next = sharedData;
	 var data = next.get();
	 $scope.data = data;
	 
}]);