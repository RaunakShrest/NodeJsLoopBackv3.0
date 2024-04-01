// var myApp= angular.module("myItems",['libServices']);

// //using the Item you can create commands just like create,edit,delete
// myApp.controller("myItemsController",function($scope, $http, Item){
// $scope.items= Item.find() //loopback provided function that will fetch all the data within the item model

// })
var myApp = angular.module("myItems", ['libServices']);

// Define controller and inject dependencies
myApp.controller("myItemsController", function($scope, Item) {
    Item.find().$promise.then(function(items) {
        console.log('Items:', items);
        $scope.items = items;
    }).catch(function(err) {
        console.error('Error fetching items:', err);
    });
});
