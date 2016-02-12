mobileStoreApp.factory('LoginService',['$http' , function($http) {
	return {
		login : function(user, pass){
			return $http.get('data/UserProfile.json')
			.then(
					function(response){
						result = false;
						response.data.some(function(elem, index) {
							result = (elem.name == user && elem.password == pass);
							return (elem.name == user && elem.password == pass);
						});
						if(result){
							return "success";
						} else return "failed";
					}
			);
		}
	};
}]);