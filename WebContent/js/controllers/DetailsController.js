mobileStoreApp.controller('DetailsController', ['$scope', 'sharedData', function($scope, sharedData){
	
	var next = sharedData;
	var data = next.get();
	$scope.data = data;
	$scope.popover = false; 
	if(data.name){
		localStorage.setItem('data', JSON.stringify($scope.data));
	}
	
	if(!data.name){
		var storedData = localStorage.getItem('data');
		$scope.data = JSON.parse(storedData);
	}
	$scope.hoverIn = function(event){
		$scope.popover = true;
		$scope.imgsrc = document.getElementById(event.target.id).src;
		document.querySelector('.center_prod_box_big').style.opacity=0.2;
	};
	
	$scope.hoverOut = function(){
		$scope.popover = false;
		document.querySelector('.center_prod_box_big').style.opacity=1;
	};
}]);