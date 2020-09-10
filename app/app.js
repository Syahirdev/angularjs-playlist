var myPersonApp = angular.module("myPersonApp", ["ngRoute"]);

//Fire before app run
myPersonApp.config([
	"$routeProvider",
	function ($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "views/home.html",
			})
			.when("/directory", {
				templateUrl: "views/directory.html",
				controller: "PersonController",
			})
			.otherwise({
				redirectTo: "/home",
			});
	},
]);

//Fire once app is running
myPersonApp.run(function () {});

myPersonApp.controller("PersonController", [
	"$scope",
	function ($scope) {
		$scope.removePerson = function (person) {
			var removedPerson = $scope.persons.indexOf(person);
			$scope.persons.splice(removedPerson, 1);
		};

		$scope.addPerson = function () {
			$scope.persons.push({
				name: $scope.newPerson.name,
				color: $scope.newPerson.color,
				weight: parseInt($scope.newPerson.weight),
				available: true,
			});

			$scope.newPerson.name = "";
			$scope.newPerson.color = "";
			$scope.newPerson.weight = "";
		};

		$scope.persons = [
			{
				name: "Syahir",
				color: "green",
				weight: 50,
				available: true,
				thumb: "http://placehold.it/50x50/666666/ffffff",
			},
			{
				name: "Syazmi",
				color: "blue",
				weight: 45,
				available: true,
				thumb: "http://placehold.it/50x50/666666/ffffff",
			},
			{
				name: "Syakira",
				color: "yellow",
				weight: 47,
				available: true,
				thumb: "http://placehold.it/50x50/666666/ffffff",
			},
			{
				name: "Sameon",
				color: "red",
				weight: 69,
				available: false,
				thumb: "http://placehold.it/50x50/666666/ffffff",
			},
		];
	},
]);
