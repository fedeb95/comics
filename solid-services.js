var app = angular.module('solid-services',[]);
app.factory('solidService', function($window) {
  var popupLoginFun = function(uri){
    return $window.SolidAuthClient.popupLogin({popupUri:uri});
  }; 
  return {
    popupLogin: function(uri){
      return popupLoginFun(uri);
    }
  };
});
