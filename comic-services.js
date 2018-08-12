var app = angular.module('comic-services',[]);
app.factory('comicService',function($http,$log){
    var getAllComics = function(){
      return $http.get('fumetti.json');
    };

    var getAllSeries = function(){
      return $http.get('comicSeries.json');
    };
    return{
      getComics: function(){
        return getAllComics();
      },
      getSeries: function(){
        return getAllSeries();
      }
    };
});
