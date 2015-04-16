var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/home");
    
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "templates/home.html"
    }).state('wedding', {
        url: "/wedding",
        templateUrl: "templates/wedding/wedding.html",
        controller: "WeddingController"
    }).state('bitcoin', {
        url: "/bitcoin",
        templateUrl: "templates/bitcoin.html"
    }).state('umich', {
        url: "/umich",
        templateUrl: "templates/layouts/gifList.html",
        controller: "UMichController"
    }).state('robotics', {
        url: "/robotics",
        templateUrl: "templates/layouts/gifList.html",
        controller: "RoboticsController"
    }).state('graphics', {
        url: "/graphics",
        templateUrl: "templates/layouts/gifList.html",
        controller: "GraphicsController"
    });
});

app.provider('FrameworkAJAX', function(){
    return {
        $get: ['$http', function( $http ){
            return {
                sendRequest: function(request, successCallback, errorCallback){

                    if( !request.method || !request.url ){
                        console.log('Error making AJAX request: missing method, url, or data.');
                        return;
                    }

                    return $http( request ).success( successCallback ).error( errorCallback );
                }
            };
        }]		
    };
});

app.directive('header', function(){
    return {
        templateUrl: 'templates/headers/headerHomeTemplate.html'
    };
});