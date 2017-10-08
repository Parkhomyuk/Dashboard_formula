

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
        })
        .when("/calendar", {
        templateUrl : "templates/calendar.html"
        })
        .when("/address_book", {
        templateUrl : "templates/address_book.html"
        })
        .when("/import",{
            templateUrl :"templates/importMembersTemplate.html"
        })
        .when("/directories",{
            templateUrl:"templates/directoriesTemplate.html"
    });
});




