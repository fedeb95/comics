var app = angular.module('comic-app',['comic-directives','comic-services']);
app.controller('AppController',['$scope','$http','$log','comicService',function($scope,$http,$log,comicService){
    $scope.allcomics = [];
    $scope.comicSeries = [];
    comicService.getComics().then(
      function(data){
        $log.info(data)
        $log.info(data.data)
        $log.info(data.data.comics)
        $scope.allcomics = data.data.comics;
      },
      function(err){
        $log(err);
      }
    );
    comicService.getSeries().then(
      function(data){
        $scope.comicSeries = data.data.series;
      },
      function(err){
        $log(err);
      }
    );
}]);
app.filter('rate', function(){
    return function(n){
        var str="";
        var black = "\u2605";
        var white = "\u2606";
        for (var i=0;i<5;i++){
            if(n > 0){
                str+=black;
                n--;
            }else{
                    str+=white;
            }
        }
        return str;
    };
});
