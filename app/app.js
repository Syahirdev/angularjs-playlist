var myPersonApp = angular.module("myPersonApp", []);

//Fire before app run
myPersonApp.config(function () {});

//Fire once app is running
myPersonApp.run(function () {});

myPersonApp.controller("PersonController", [
	"$scope",
	function ($scope) {
		$scope.message = "Hello World";
		$scope.persons = ["Syazmi", "Syakira", "Syahir", "Sameon"];
	},
]);
