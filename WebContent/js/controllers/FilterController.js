mobileStoreApp.controller('FilterController', ['$scope', function($scope){
	
	/* show initial filter options  */
    $scope.showFilters = function(){
        $(".slidingDiv_brands").hide();
        $(".show_hide_brands").show();
        $(".slidingDiv_screen_size").hide();
        $('.show_hide_screen_size').show();
    };
    
    /* hide and show of filters*/
    $('.show_hide_brands').on("click",function(e) {
        if ($(this).data("show")=="no") {
        	$("#plus").text("-Mobile Brands");
        	$(".slidingDiv_brands").slideDown();
          $(this).data("show","yes");
        }   
        else {
        	$("#plus").text("+Mobile Brands");
        	$(".slidingDiv_brands").slideUp();
          $(this).data("show","no");     
        }
    });
    
    $('.show_hide_screen_size').on("click",function(e) {
        if ($(this).data("show")=="no") {
        	$("#plus_screen").text("-Screen Size(Inches)");
        	$(".slidingDiv_screen_size").slideDown();
          $(this).data("show","yes");
        }   
        else {
        	$("#plus_screen").text("+Screen Size(Inches)");
        	$(".slidingDiv_screen_size").slideUp();
          $(this).data("show","no");     
        }
    });
    
    $scope.showFilters();
}]);