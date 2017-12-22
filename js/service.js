angular.module('SoccerNewsService', []).factory("SoccerNewsAPIService", ["$http", function($http) {
    return {
        getNewsFeed: function(url,apiKey,news_src) {
           
           return $http.get(url, {
        params:  {'sources':news_src,'apiKey': apiKey,},
        headers: { 'Content-Type' : 'application/json'}
    });

           // return $http.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey='+apiKey);
        },
        /*anotherMethod: function() {
            //etc....
        },
        yetAnotherMethod: function() {
            return $http.post(); //maybe POST something
        }*/
    };
}]);