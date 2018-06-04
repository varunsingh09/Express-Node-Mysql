var app = angular.module('app', []);
 
//#######################
//JSA CONTROLLER
//#######################
 
app.controller('jsaLoadUsers', function($scope, $http, $location) {
	$scope.users = [];
	
	function getAllUsers(){
		var url = "api/users/all";
		
		// do getting
		$http.get(url).then( response => {
			$scope.getDivAvailable = true;
			$scope.users = response.data;
		}, response => {
			$scope.postResultMessage = "Error Status: " +  response.statusText;
		});
	}
	
	getAllUsers();
});