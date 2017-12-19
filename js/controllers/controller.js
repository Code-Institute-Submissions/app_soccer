var news = angular.module("NewsCtrl", []);

var apiKey = 'a6cc22b291b3427dae7796e0b22c931e';
var ID = 5;
var SEASON = '2017';
var MATCH_DAY = 10;
var SEASON_ID = 426;
var url = 'https://api.football-data.org/v1/competitions/?';

var url_top_headlines = 'https://newsapi.org/v2/top-headlines';
var news_src_bbc = 'bbc-sport';
var news_src_espn = 'espn';
var news_src_talksport = 'talksport';
var apiKey_news = 'c368841c1eee4986bd707b802b7d8762';


news.controller('getNewsCTRL', function($scope, SoccerNewsAPIService) {
    $scope.getNews = function() {
        SoccerNewsAPIService.getNews(url_top_headlines, apiKey_news, news_src_espn)
            .then(function(results) {
                $scope.newsReports = results.data;
                console.log($scope.newsReports);
            }).catch(function err() {
                alert("err()");
            });
    }
    $scope.getNews();
});


