var app = angular.module('soccerApp', ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html',
        //controller: 'HomeController'
    })
    .when('/news', {
        templateUrl : 'templates/news.html'
    })
    .when('/about', {
        templateUrl : 'templates/about.html'
    })
    .when('/contact', {
        templateUrl : 'templates/contact.html'
    }).otherwise({ 
        redirectTo: '/index.html' 
    });
});