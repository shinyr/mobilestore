mobileStoreApp.config(function($stateProvider, $urlRouterProvider){
	
	 $urlRouterProvider.otherwise('/home');
	 
	 $stateProvider.state('login', {
         url:'/login',
         templateUrl: './views/login.html',
         controller: 'LoginController',
	 });
	 
	 $stateProvider.state('home', {
         url:'/home',
         templateUrl: './views/home.html',
         controller: 'HomeController',
	 });
	 
	 $stateProvider.state('filter', {
         url:'/filter',
         templateUrl: './views/filter.html',
         controller: 'FilterController',
	 });
	 
	 $stateProvider.state('details', {
         url:'/details',
         templateUrl: './views/details.html',
         controller: 'DetailsController',
	 });
 });