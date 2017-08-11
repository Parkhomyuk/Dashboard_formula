

var app=angular.module('formula',["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/main.html"
        })
        .when("/main_table", {
            templateUrl : "templates/main_table.html"
        })
        .when("/green", {
            templateUrl : "templates/green.html"
        })
        .when("/blue", {
            templateUrl : "templates/blue.html"
        });
});




