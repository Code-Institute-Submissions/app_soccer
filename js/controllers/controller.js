var news = angular.module("NewsCtrl", ['ui.bootstrap']);

var apiKey = 'a6cc22b291b3427dae7796e0b22c931e';
var ID = 5;
var SEASON = '2017';
var MATCH_DAY = 10;
var SEASON_ID = 426;
var url = 'https://api.football-data.org/v1/competitions/?';

var url_top_headlines = 'https://newsapi.org/v2/top-headlines';
var news_src_bbc = 'bbc-sport';//NOT WORKING
var news_src_espn = 'espn';
var news_src_talksport = 'talksport';
var news_src_foxsport = 'fox-sports';
var news_src_thesportBible = 'the-sport-bible';

var apiKey_news = 'c368841c1eee4986bd707b802b7d8762';


news.controller('getNewsCTRL', function($scope, SoccerNewsAPIService) {

    $scope.getNews = function(news_src) {
        SoccerNewsAPIService.getNewsFeed(url_top_headlines, apiKey_news, news_src)
            .then(function(results) {
                $scope.newsReports = results.data;
                console.log($scope.newsReports);
                
                $('.carousel').carousel({
          interval: 3000
        });


              $scope.changeNews = function(news_src){
        $scope.getNews(news_src);
        $scope.hideNews()
    }
    $scope.showNews = function(article){
        $scope.showNewsTitle = article.title;
        $scope.showNewsDescription = article.description;
        $scope.showNewsAuthor = 'Author' +article.author;
        
    }
    $scope.hideNews = function(){
        $scope.showNewsTitle = '';
        $scope.showNewsDescription = '';
        $scope.showNewsAuthor = '';
        
    }

               
                
            }).catch(function err() {
                alert("err()");
            });

    }

    $scope.getNews(news_src_espn);
    
});
