	mobileStoreApp.controller('LoginController', ['$scope', 'LoginService', '$location', function($scope, LoginService, $location){
		$scope.login = function(user, pass){
		$scope.submitted = true;
		$scope.successLogin = true;
		 if(user != undefined && pass != undefined) {
			 LoginService.login(user, pass).then(function(data) {
				 alert(data);
					if(data == "success"){
						$location.path('/home');
					}else {
						alert('else');
						$scope.successLogin = false;
					}
				});
		}
	}
}]);
