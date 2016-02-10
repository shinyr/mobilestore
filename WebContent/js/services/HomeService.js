app.factory('HomeService',['$http' ,function($http) {
	return{
		fetchProducts: function() {
			return $http.get('Android.json');
		}
	};
}]);