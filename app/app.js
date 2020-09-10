var myPersonApp = angular.module("myPersonApp", ["ngRoute", "ngAnimate"]);

//Fire before app run
myPersonApp.config([
	"$routeProvider",
	"$locationProvider",
	function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when("/home", {
				templateUrl: "views/home.html",
				controller: "PersonController",
			})
			.when("/contact", {
				templateUrl: "views/contact.html",
				controller: "ContactController",
			})
			.when("/contact-success", {
				templateUrl: "views/contact-success.html",
				controller: "ContactController",
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

myPersonApp.directive("randomPerson", [
	function ($scope, $http) {
		return {
			restrict: "E",
			scope: {
				persons: "=",
				title: "=",
			},
			templateUrl: "views/random.html",
			transclude: true,
			replace: true,
			controller: function ($scope) {
				$scope.random = Math.floor(Math.random() * 4);
			},
		};
	},
]);

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

		$scope.removeAll = function () {
			$scope.persons = [];
		};

		$http.get("data/persons.json").then(function (response) {
			$scope.persons = response.data;
		});

		// console.log(angular.toJson($scope.persons));
	},
]);

myPersonApp.controller("ContactController", [
	"$scope",
	"$location",
	function ($scope, $location) {
		$scope.sendMessage = function () {
			$location.path("/contact-success");
		};
	},
]);
