mobileStoreApp.factory('sharedData', function() {
    var sharedData = {};
    var get = function() {
        return sharedData;
    };
    var set = function(data) {
        sharedData = data;
    };

    return {
        get : get,
        set : set
    }
});