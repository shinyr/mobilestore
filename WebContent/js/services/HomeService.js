/* HomeService implements methods to list the products , categories,etc in the home page */
mobileStoreApp.factory('HomeService',['$http','$q', function($http, $q) {
	return{
		listProducts: function(platform, categoryParam) { //method to get the products based on platform selection.
			var filename;
			if(platform == 'Android'){
				filename = 'data/Android.json';
			} else if(platform == 'Windows'){
				filename = 'data/Windows.json';
			} else
				filename = 'data/Ios.json';
			return $http.get(filename)
			.then(
					function(response){
						var category = []; //array to save categories
						var models = []; // array to save models
							angular.forEach(response.data, function(value, key) {
								var cat = {};
								cat.category = key;
								if((key == categoryParam && categoryParam != undefined) || categoryParam == undefined){
									angular.forEach(value, function(value1, key1) {
										var mod = {};
										mod.name = key1;
										mod.price = value1[0].Price;
										mod.img = value1[0].img;
										models.push(mod);
									});
								}
								category.push(cat);
							});
						 return {category:category, models: models};
					}, 
					function(errResponse){
						return $q.reject(errResponse);
					}
			);
		}
	};
}]);
