var app = angular.module('soccerApp', ['ngRoute','NewsCtrl','ContactController'
    ,'SoccerNewsService','ui.bootstrap']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html',
        //controller: 'HomeController'
    })
    .when('/news', {
        templateUrl : 'templates/news.html',
        //controller: 'NewsCtrl'
    })
    .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller: 'ContactCont'
    }).otherwise({ 
        redirectTo: '/index.html' 
    });
    
}]);