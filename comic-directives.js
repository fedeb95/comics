var app = angular.module('comic-directives',[]);
app.directive('series',function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl:'series-selector.html'
    };
});
app.directive('comics',function(){
return{
      restrict: 'A',
      replace: true,
      controller:['$scope','$http','$log',function($scope,$http,$log){
        $scope.search= {}
        $scope.search.series=''
        $scope.search.title=''

        $scope.matchSearch=function(obj){
            $log.info($scope.search.series==obj.series)
            $log.info($scope.search.series)
            $log.info(obj.series)
            return ($scope.search.title=='' || obj.title.toLowerCase().indexOf($scope.search.title.toLowerCase()) > -1) &&
                (obj.series === $scope.search.series || $scope.search.series=='');
        }
      }],
      templateUrl: 'comics-template.html',
    };
});
app.directive('comicForm',function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl: 'comic-form.html',
        controller: function($scope){
            $scope.comic = {}
            this.readFile = function(){
              var f = document.getElementById('file').files[0],
              r = new FileReader();
              r.onloadend = function(e) {
                var data = e.target.result;
                //send your binary data via $http or $resource or do anything else with it
              }
              return r.readAsBinaryString(f);
            }
            $scope.addComic = function(){
                $scope.allcomics.push($scope.comic);
                $scope.comicForm.$setPristine(true)
                $scope.comicForm.title.$setPristine(true)
                $scope.comicForm.number.$setPristine(true)
                $scope.comic = {};
            }
        },
        controllerAs: 'comicCtrl',
    };
});
