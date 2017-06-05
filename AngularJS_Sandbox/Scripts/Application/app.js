var app = angular.module('SandBox', ['ngRoute']);

app.run(function ($rootScope) {
    $rootScope.name = "Daniel Villalba";
});