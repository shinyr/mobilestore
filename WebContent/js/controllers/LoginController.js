	mobileStoreApp.controller('LoginController', ['$scope', 'LoginService', '$location', function($scope, LoginService, $location){
		$scope.login = function(user, pass){
		$scope.submitted = true;
		$scope.successLogin = false;
		 if(user != undefined && pass != undefined) {
			 LoginService.login(user, pass).then(function(data) {
					if(data == "success"){
						$location.path('/home');
						$scope.successLogin = true;
					}else {
						$scope.successLogin = false;
					}
				});
		}
	}
}]);
