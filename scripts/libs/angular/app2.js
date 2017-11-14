var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

// define the controller mainController
myApp.controller('mainController',['$scope', '$http', function($scope,$http){

   // create the array of objects
   $scope.persons = [];

   // get the data from JSON file using $http service
   $http.get("data/data2.json")
     .then(function(response) {
         $scope.persons = response.data;
     });

  /* Add Items */
  // define addItem method
  $scope.addFunc = function () {

      $scope.persons.splice(0,0,{ // add the new item at the start
        firstName:$scope.newItem.firstName,
        lastName:$scope.newItem.lastName,
        salary:parseInt($scope.newItem.salary),
        department:$scope.newItem.department
      });
     console.log($scope.persons);

     // empty the input values
     $scope.newItem.firstName  =" ";
     $scope.newItem.lastName  =" ";
     $scope.newItem.salary  =" ";
     $scope.newItem.department  =" ";
  }

  // sort function
  $scope.sort = function(keyname){
      $scope.sortKey = keyname;   //set the sortKey to the param passed
      $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    //  remove Person method
  $scope.removePerson = function(person){
    var removeItem = $scope.persons.indexOf(person);// get the index position in array
    if(removeItem !== -1){
    $scope.persons.splice(removeItem, 1); // remove 1 item from that position
   }
  }



}]);
