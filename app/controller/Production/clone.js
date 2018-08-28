app.controller('seedCtrl', function ($scope) {
           $scope.name="shilpa";

           console.log($scope.name);

 $scope.add=function(){
   
   

    $scope.a=10;
    $scope.b=10;

    $scope.sum=$scope.a+$scope.b;

    alert($scope.sum);
 }

  $scope.edit=function(name){
    alert($scope.name);
 }


  $scope.copy=function(name){
    alert($scope.name);
 }


});