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
	"$http",
	function ($scope, $http) {
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

		$http.get("data/persons.json").then(function (response) {
			$scope.persons = response.data;
		});

		// console.log(angular.toJson($scope.persons));
	},
]);
