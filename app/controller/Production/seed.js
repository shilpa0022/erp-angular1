app.controller('seedCtrl', function($scope,DataService,$log) {

    $scope.array=[];
    $scope.data={
     "sourceTypeId": 1, 
     "name": "Albert Walker", 
     "type": "Hybrid",
     "source": "",
     "sourceId": "",
     "location": "L3",
     "estimatedYield": 30,
     "startDate": "24-08-2018",
     "nextStageDate": "05-09-2018", 
     "nextStage": "Pre Flowering",
     "currentStatus": ""
    }

    console.log($scope.data)



     
     DataService.getStages().then(function(response) {
        $scope.growingStage = response.data.response;
        console.log(response.data)
        console.log($scope.growingStage);
        }, function(error) {
            
    });


     DataService.seedTypes().then(function(response)
     {
        $scope.seedType=response.data.response;
        console.log(response.data)
        console.log($scope.seedType);
    },function(error){
         })


   DataService.status().then(function(response)
     {
        $scope.status=response.data.response;
        console.log(response.data)
        console.log($scope.status);
    },function(error){
         })
    





    $scope.add = function() {
        $scope.array.push($scope.data)
        console.log($scope.add);
    }

    $scope.edit = function(name) {
        alert($scope.name);
    }


    $scope.copy = function(name) {
        alert($scope.name);
    }


});