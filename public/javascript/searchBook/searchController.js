var myApp = angular.module('myApp', []);
myApp.controller('searchCtrl', function ($scope, $http, $window) {

	$scope.searchBook = function() {
		$http.get("http://localhost:3000/searchBook?q=" + $scope.name)
			.then(function(response) {
				$scope.list = response.data.items;
			});
	}

});