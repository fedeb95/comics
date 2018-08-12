var app = angular.module('price-services',[]);
app.factory('priceService',function($http,$log){
    var baseUrl = "localhost";
    var getPrice = function(keywords){
        return $http( 
            method: 'GET',
            url: baseUrl+'/find/',
            params: {
                id: JSON.stringify(keywords)    
            }
        );
    };
    return{
      getPrice: function(keywords){
        return getPrice(keywords);
      }
    };
});
