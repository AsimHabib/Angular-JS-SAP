var myApp = angular.module('myApp', []);

// define the controller mainController
myApp.controller('mainController',['$scope', function($scope){

   // create the array of objects
  $scope.persons = [
    {
      firstName:"Jhon",
      lastName:"Zoe",
      salary:36000,
      job:"Tech Support"
    },
    {
      firstName:"Peter",
      lastName:"Fox",
      salary:42000,
      job:"Front end developer"
    },
    {
      firstName:"Smith",
      lastName:"Paul",
      salary:56000,
      job:"Back end developer"
    }
  ];

  /* Add Items */
  // define addItem method
  $scope.addFunc = function () {

      $scope.persons.push({
        firstName:$scope.newItem.firstName,
        lastName:$scope.newItem.lastName,
        salary:parseInt($scope.newItem.salary),
        job:$scope.newItem.job
      });
     console.log($scope.persons);

     // empty the input values
     $scope.newItem.firstName  =" ";
     $scope.newItem.lastName  =" ";
     $scope.newItem.salary  =" ";
     $scope.newItem.job  =" ";
  }

  // define the orderByFirstName method
  $scope.orderByFirstName = function(fName){
    $scope.order = fName;
  }

  // define the orderByLastName method
  $scope.orderByLastName = function(lName){
    $scope.order = lName ;
  }

  // define removePerson method
  $scope.removePerson = function(person){
    var removeItem = $scope.persons.indexOf(person);// get the index position in array
    if(removeItem !== -1){
    $scope.persons.splice(removeItem, 1); // remove 1 item from that position
   }
  }
}]);
