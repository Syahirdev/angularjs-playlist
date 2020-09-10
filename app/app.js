var myPersonApp = angular.module("myPersonApp", []);

//Fire before app run
myPersonApp.config(function () {});

//Fire once app is running
myPersonApp.run(function () {});

myPersonApp.controller("PersonController", [
	"$scope",
	function ($scope) {
		$scope.persons = [
			{
				name: "Syahir",
				color: "green",
				weight: 50,
				available: true,
			},
			{
				name: "Syazmi",
				color: "blue",
				weight: 45,
				available: true,
			},
			{
				name: "Syakira",
				color: "yellow",
				weight: 47,
				available: true,
			},
			{
				name: "Sameon",
				color: "red",
				weight: 69,
				available: false,
			},
		];
	},
]);
